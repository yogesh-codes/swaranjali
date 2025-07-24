import React from "react";
import SettingsSection from "../../src/shared/components/settings-page-components/SettingsSection";

const ProfileAndAccountSettings = () => {
    return (
        <SettingsSection title="Profile & Account">
            <ul className="space-y-2 list-disc list-inside text-sm">
                <li>Edit profile details (WIP)</li>
                <li>Change password (WIP)</li>
                <li>Manage connected apps (WIP)</li>
                <li>Subscription plan: Free (WIP)</li>
            </ul>
        </SettingsSection>
    );
};

export default ProfileAndAccountSettings;
