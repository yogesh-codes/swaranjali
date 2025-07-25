import React from "react";
import { createClient } from "@/features/login/utils/supabase/server";
import MyPageSection from "@/shared/components/MyPageSection";
import MyPageContent from "@/shared/components/MyPageContent";

export const page = async () => {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();
    return (
        <MyPageSection>
            <MyPageContent>
                <h1>About currently signed in user</h1>
                <pre>{JSON.stringify(user, null, 2)}</pre>
            </MyPageContent>
        </MyPageSection>
    );
};

export default page;
