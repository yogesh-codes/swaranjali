"use client";
import { useSession } from "@/shared/utils/supabase/useSession";
// import { useSupabase } from "@/shared/utils/supabase/SupabaseProvider";
import React from "react";

const UserDetailsSections = () => {
    // const { session } = useSupabase();
    const session = useSession();

    return (
        <div>
            <h2>Session and User</h2>
            <p>{JSON.stringify(session, null, 2)}</p>
        </div>
    );
};

export default UserDetailsSections;
