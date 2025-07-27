"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import type { Session } from "@supabase/supabase-js";
import { createBrowserClient } from "@supabase/ssr";

// 1. Define the shape of our context
type SupabaseContextType = {
    supabase: ReturnType<typeof createBrowserClient>;
    session: Session | null;
};

// 2. Create the context (undefined initial value)
const SupabaseContext = createContext<SupabaseContextType | undefined>(
    undefined
);

// 3. Hook to consume the context
export function useSupabase() {
    const context = useContext(SupabaseContext);
    if (!context) {
        throw new Error("useSupabase must be used within a SupabaseProvider");
    }
    return context;
}

// 4. Provider component
export function SupabaseProvider({
    initialSession,
    children,
}: {
    initialSession: Session | null;
    children: ReactNode;
}) {
    const [session, setSession] = useState<Session | null>(initialSession);
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    ); // browser client :contentReference[oaicite:0]{index=0}

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, newSession) => {
            setSession(newSession); // fire on SIGNED_IN, SIGNED_OUT, TOKEN_REFRESHED, etc. :contentReference[oaicite:1]{index=1}
        });
        return () => {
            subscription.unsubscribe();
        };
    }, [supabase]);

    return (
        <SupabaseContext.Provider value={{ supabase, session }}>
            {children}
        </SupabaseContext.Provider>
    );
}
