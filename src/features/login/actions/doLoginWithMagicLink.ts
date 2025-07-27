// app/(auth-group)/login/_actions/actions.ts
"use server";

import { createServerSupabase } from "@/shared/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function doLoginAction(formData: FormData) {
    const userEmail = formData.get("email") as string;
    const supabase = await createServerSupabase();

    const PROJECT_SITE_URL = process.env.PROJECT_SITE_URL!;
    console.log(`ProjectBaseUrl is ${PROJECT_SITE_URL}`);

    // console.log("base url is", myProjectBaseUrl);

    // //defensive, in case
    // if (!myProjectBaseUrl) {
    //     console.error("Invalid Project Base URL", myProjectBaseUrl);
    //     return {
    //         status: "error",
    //         message: "Error from our end (Invalid project base url)",
    //     };
    // }

    // inside a Route Handler or API route where you have access to the incoming Request
    const { origin } = new URL(PROJECT_SITE_URL); // “http://localhost:3000” or “https://johnm.com”
    const redirectUrl = new URL("/auth/confirm", origin); // build the absolute URL
    redirectUrl.searchParams.set("next", "/dashboard"); // add your post-login path

    const { error: authError, data } = await supabase.auth.signInWithOtp({
        email: userEmail,
        options: {
            //PROJECT_SITE_URL will be localhost3000 or swaranjali
            emailRedirectTo: redirectUrl.toString(),
            //Note: supabase will further add searchparams tokenhash and type,
            //Note: supabase mail template for has been curated to expect '?next=dashboard'

            //This is pure log in, signups not allowed
            shouldCreateUser: false,
        },
    });

    if (authError) {
        console.log({ authError });
        console.log(authError.name);

        console.log("code=" + authError.code);
        console.log("message=" + authError.message);
        if (authError.message === "Signups not allowed for otp") {
            redirect(
                encodeURI("/login?msgType=error&msg=Account doesn't exist.")
            );
        } else if (authError.status?.toString().startsWith("4")) {
            redirect(encodeURI("/login?msgType=error&msg=Some error occured."));
        } else if (authError.status?.toString().startsWith("5")) {
            redirect(
                encodeURI(
                    "/login?msgType=error&msg=An internal server error occured. Please try again later."
                )
            );
        }

        redirect(`/login?msgType=error&msg=Unforeseen error occured.`);
    }

    //Here=> no errors
    console.log({ data });
    revalidatePath("/", "layout");

    redirect(
        encodeURI(
            "/login?msg=Please check your email for magic link.&msgType=success"
        )
    );

    //     return {
    //         success: true,
    //         message: "A one-time link has been sent to your inbox.",
    //     };
}
