import React from "react";
import MyPageSection from "@/shared/components/MyPageSection";
import MyPageContent from "@/shared/components/MyPageContent";

import UserDetailsSections from "@/features/zzz-user/components/UserDetailsSections";

const Page = () => {
    return (
        <MyPageSection>
            <MyPageContent>
                <UserDetailsSections />
            </MyPageContent>
        </MyPageSection>
    );
};

export default Page;
