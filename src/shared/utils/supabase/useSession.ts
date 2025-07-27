// app/hooks/useUser.ts
"use client";

import { useState, useEffect } from "react";
import { createBrowserSupabase } from "@/shared/utils/supabase/client";
import type { Session } from "@supabase/supabase-js";

export function useSession() {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        const supabase = createBrowserSupabase();
        let mounted = true;
        let subscriptionCleanup: (() => void) | null = null;

        async function init() {
            // 1. fetch current session
            try {
                const { data } = await supabase.auth.getSession();
                if (mounted) setSession(data.session ?? null);
            } catch (err) {
                console.error("getSession error:", err);
            }

            // 2. subscribe to future changes
            const {
                data: { subscription },
            } = supabase.auth.onAuthStateChange((_event, session) => {
                if (mounted) setSession(session ?? null);
            });
            subscriptionCleanup = () => subscription.unsubscribe();
        }

        void init();

        return () => {
            mounted = false;
            subscriptionCleanup?.();
        };
    }, []);

    return session;
}
