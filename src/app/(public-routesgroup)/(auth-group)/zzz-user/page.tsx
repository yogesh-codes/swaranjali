import React from "react";
import { createClient } from "@/features/login/utils/supabase/server";

export const page = async () => {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();
    return (
        <div>
            <h1>About currently signed in user</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    );
};

export default page;
