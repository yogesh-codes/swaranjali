import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/features/login/utils/supabase/server";

// Creating a handler to a GET request to route /auth/confirm
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    console.log({ searchParams });
    const token_hash = searchParams.get("token_hash");
    const type = searchParams.get("type") as EmailOtpType | null;
    const next: string = searchParams.get("next") ?? "/dashboard";

    console.log({ token_hash });
    console.log({ type });

    /*
    expectation:
    we expect url of form
    http://<siteurl>/auth/confirm?next=<eg:dashboard/>&type=<eg:magiclink>&token_hash=pkce_<64-char-string>
    
    searchParams are:
    1. 'next=' is the url to redirect to after everything about login is done. 
    Default is /dashboard.
    
    2. 'type=' is EmailOtpType eg: 'email' | 'magiclink' | etc
    

    3. 'token_hash=': 64 character string of hex characters 
    For magiclink and email, we will send this token_hash to supabase auth servers using supabase.auth.verifyOtp(). 
    In exchange we'll receive access token,refresh tokens etc which [??] will put into the client browser's cookies.
    Thereon, everytime client hits server with request, the cookies will come along.
     
    */
    // Create redirect link without the secret token
    const redirectTo = request.nextUrl.clone();

    redirectTo.pathname = next;
    redirectTo.searchParams.delete("token_hash");
    redirectTo.searchParams.delete("type");

    //Expectation- they arrive here with the token_hash and type
    if (token_hash && type) {
        const supabase = await createClient();

        const { error: err } = await supabase.auth.verifyOtp({
            type,
            token_hash,
        });

        if (!err) {
            redirectTo.searchParams.delete("next");
            console.log("redirecting to " + { redirectTo });
            return NextResponse.redirect(redirectTo);
        } else {
            redirectTo.searchParams.delete("next");
            redirectTo.pathname = `/login?status${err.status}&msg=${err.message}&code=${err.code}`;
            return NextResponse.redirect(redirectTo);
        }
    }

    // return the user to an error page with some instructions
    redirectTo.pathname = `/error?msg=idontknow`;
    console.log("redirecting to " + { redirectTo });

    return NextResponse.redirect(redirectTo);
}
