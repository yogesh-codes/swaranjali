// app/auth/login/actions.ts
"use server";

import { createClient } from "@/app/(auth)/_utils/supabase/server";

export async function doLogin(formData: FormData) {
    const userEmail = formData.get("email") as string;
    const supabase = await createClient();

    const myProjectBaseUrl = process.env.PROJECT_BASE_URL!;

    console.log("base url is", myProjectBaseUrl);

    //defensive, in case
    if (!myProjectBaseUrl) {
        console.error("Invalid Project Base URL", myProjectBaseUrl);
        return {
            status: "error",
            message: "Error from our end (Invalid project base url)",
        };
    }

    const { error: authError, data } = await supabase.auth.signInWithOtp({
        email: userEmail,
        options: {
            emailRedirectTo: `${myProjectBaseUrl}/auth/callback`,
        },
    });
    if (authError) {
        console.error({ error: authError });
        // throw new Error(authError.message);
        return {
            status: "error",
            message: authError.message,
        };
    }

    //defensive
    if (!data) {
        //this shouldnt happen
        console.error("This shouldnt happen.");
    }

    console.log({ data });

    return {
        success: true,
        message: "A one-time link has been sent to your inbox.",
    };
}
