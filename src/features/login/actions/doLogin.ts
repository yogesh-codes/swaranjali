// app/(auth-group)/login/_actions/actions.ts
"use server";

import { createClient } from "@/features/login/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function doLogin(formData: FormData) {
    const userEmail = formData.get("email") as string;
    const supabase = await createClient();

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

    const { error: authError, data } = await supabase.auth.signInWithOtp({
        email: userEmail,
        options: {
            //PROJECT_SITE_URL will be localhost3000 or swaranjali
            emailRedirectTo: `${PROJECT_SITE_URL}/auth/confirm?next=dashboard`,
            //Note: supabase will further add searchparams tokenhash and type,
            //Note: supabase mail template for has been curated to expect '?next=dashboard'

            //This is pure log in, signups not allowed
            shouldCreateUser: false,
        },
    });

    if (authError) {
        // console.error({ error: authError });
        // // throw new Error(authError.message);
        // return {
        //     status: "error",
        //     message: authError.message,
        // };
        redirect(
            `/error?msg=${authError.message}&httpstatuscode=${authError.code}`
        );
    }
    console.log(data);
    revalidatePath("/", "layout");
    redirect("/zzz-user?st");

    //     return {
    //         success: true,
    //         message: "A one-time link has been sent to your inbox.",
    //     };
}
