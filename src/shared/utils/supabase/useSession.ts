// app/hooks/useSession.ts
"use client";
import { useState, useEffect } from "react";
import type { Session, AuthError, SupabaseClient } from "@supabase/supabase-js";
import { createBrowserSupabase } from "./client";

export function useSession() {
    const [session, setSession] = useState<Session | null>(null);
    const [error, setError] = useState<AuthError | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let supabase: undefined | SupabaseClient;

        let mounted = true; // ◀︎ mounted guard
        let cleanup: () => void; // ◀︎ for the subscription

        try {
            supabase = createBrowserSupabase();
        } catch (err) {
            if (mounted) {
                setSession(null);
                setError(err);
                setIsLoading(false);
            }
        }

        {
            async function init() {
                if (supabase !== undefined) {
                    try {
                        // 1) fetch initial session
                        const { data, error: authError } =
                            await supabase.auth.getSession();
                        if (authError) throw authError;
                        if (mounted) setSession(data.session);
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } catch (err: any) {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                        if (mounted) setError(err);
                    } finally {
                        if (mounted) setIsLoading(false);
                    }

                    // 2) subscribe to future changes
                    const {
                        data: { subscription },
                    } = supabase.auth.onAuthStateChange(
                        (_event, newSession) => {
                            if (mounted) setSession(newSession);
                        }
                    );

                    cleanup = () => subscription.unsubscribe();
                }
            }

            // kick it off
            console.log("supabase is now ", supabase);
            void init();

            return () => {
                mounted = false;
                cleanup?.();
            };
        }
    }, []);

    return { session, error, isLoading };
}
