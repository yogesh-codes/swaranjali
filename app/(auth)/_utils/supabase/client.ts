// "use client";

import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!, //supabase_url
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! //supabase_anonkey
    );
}

//Note: This gives you a createClient() function to call inside any "use client" component
