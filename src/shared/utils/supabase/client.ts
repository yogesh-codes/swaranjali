import { createBrowserClient } from "@supabase/ssr";
export function createBrowserSupabase() {
    // Create a supabase client on the browser with project's credentials
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
}

//Note: This will throw an unhandled error if keys are misconfigured.
