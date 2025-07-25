"use client";

import { createClient } from "@/features/login/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";

export const UserProfileMenu = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        const getUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        };

        getUser();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [supabase]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh();
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center">
                <div className="animate-pulse rounded-full aspect-square w-5 h-5"></div>
            </div>
        );
    }

    if (user) {
        return (
            <div className="flex items-center justify-center gap-x-1">
                <div className="rounded aspect-square">
                    <RxAvatar />
                </div>
                <button onClick={handleSignOut}>Sign out</button>
            </div>
        );
    }

    //Not logged in user
    return (
        <Link href="/login">
            <div className=" flex items-center justify-center gap-x-1">
                <div className="rounded aspect-square align-middle">
                    <RxAvatar />
                </div>
                <div>Sign in/Sign Up</div>
            </div>
        </Link>
    );
};
