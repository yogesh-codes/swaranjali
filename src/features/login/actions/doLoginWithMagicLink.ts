// app/(auth-group)/login/_actions/actions.ts
"use server";

import { createServerSupabase } from "@/shared/utils/supabase/server";
import { revalidatePath } from "next/cache";

export type ReturnMsg = {
    msg: string;
    msgType: "success" | "error" | "warning" | "info";
} | null;

export async function doLoginAction(
    prevState: ReturnMsg,
    formData: FormData
): Promise<ReturnMsg> {
    const userEmail = formData.get("email") as string;
    const supabase = await createServerSupabase();

    const PROJECT_SITE_URL = process.env.PROJECT_SITE_URL;
    //sanity
    if (!PROJECT_SITE_URL) {
        throw new Error("Missing required env var: {PROJECT_SITE_URL}");
    }

    console.log(`ProjectBaseUrl is ${PROJECT_SITE_URL}`);

    const { origin } = new URL(PROJECT_SITE_URL); // “http://localhost:3000” or “https://johnm.com”
    const redirectUrl = new URL("/auth/confirm", origin); // build the absolute URL
    redirectUrl.searchParams.set("next", "/dashboard"); // add your post-login path

    const { error: authError } = await supabase.auth.signInWithOtp({
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
        console.log("code=" + authError.code);
        console.log("message=" + authError.message);

        if (authError.message === "Signups not allowed for otp") {
            return {
                msg: "Please Signup first",
                msgType: "error",
            };
        } else if (authError.status?.toString().startsWith("4")) {
            console.warn(JSON.stringify(authError));
            return {
                msg: authError.name + "; " + authError.message,
                msgType: "error",
            };
        } else if (authError.status?.toString().startsWith("4")) {
            console.warn(JSON.stringify(authError));
            return {
                msg: "Some error occured.",
                msgType: "error",
            };
        } else {
            return {
                msg: "AuthError. Some error occured.",
                msgType: "error",
            };
        }
    }

    //Here=> no errors

    revalidatePath("/", "layout");

    return {
        msg: "Please check your email for login link.",
        msgType: "success",
    };
}
