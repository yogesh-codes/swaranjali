// app/auth/callback/route.ts
import { NextResponse } from "next/server";
import { createServerSupabase } from "@/shared/utils/supabase/server";

export async function GET(request: Request) {
    // 1. Pull `code` from the query string if it exists
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");

    // if no 'code', redirect to /login.
    // user probably came here accidentally
    if (!code) {
        // If no code, send them back to login
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    const mySupabaseClient = await createServerSupabase();

    // 3. Exchange the code for a session
    const { data, error } = await mySupabaseClient.auth.exchangeCodeForSession(
        code
    );

    if (error) {
        console.error("Auth code exchange failed:", { error });
        const errorString = encodeURIComponent(
            `Auth code exchange failed:\n${error.message}`
        );
        // Optionally redirect to a friendly error page
        return NextResponse.redirect(
            new URL(`/login?error=${errorString}`, request.url)
        );
    }

    if (data) {
        console.log({ data });
    }

    // 4. On success, redirect into your app
    return NextResponse.redirect(new URL("/dashboard", request.url));
}
