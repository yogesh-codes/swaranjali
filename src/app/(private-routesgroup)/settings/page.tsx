import MyPageSection from "@/shared/components/MyPageSection";
import MyPageContent from "@/shared/components/MyPageContent";

import React from "react";

// A simple toggle switch component

// A reusable card for each section

const SettingsPage: React.FC = () => {
    return (
        <MyPageSection>
            <MyPageContent className="flex flex-col bg-red-200 items-center w-full">
                {/* <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="mb-8 text-3xl font-bold"
                    >
                        Preferences
                    </motion.h1> */}
                <h1>Settings</h1>

                <div className="mt-8 text-right">
                    <button className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                        Save Changes
                    </button>
                </div>
            </MyPageContent>
        </MyPageSection>
    );
};

export default SettingsPage;
