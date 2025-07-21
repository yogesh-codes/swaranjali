import React, { useState } from "react";
import SettingsSection from "../_components/SettingsSection";
import ToggleSwitch from "../_components/ToggleSwitch";

const PrivacySettings = () => {
    const [dataUsageConsent, setDataUsageConsent] = useState(true);

    return (
        <SettingsSection title="Privacy">
            <p className="text-sm font-medium">Improve app for everyone</p>
            <p className="text-sm mb-2">
                Send anonymous usage info to help us deliver better experiences
                for you and other users. We take your privacy seriously.
            </p>
            <ToggleSwitch
                id="data-usage-consent"
                checked={dataUsageConsent}
                onChange={setDataUsageConsent}
                label="Allow anonymous data"
            />
            <div className="mt-4">
                <button className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
                    Delete Account
                </button>
            </div>
        </SettingsSection>
    );
};

export default PrivacySettings;
