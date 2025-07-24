import React from "react";

import {
    getIsDark,
    setIsDark,
} from "@/shared/components/theme-control/ThemeControlMenu";

//Components
import SettingsSection from "./SettingsSection";
import ToggleSwitch from "./ToggleSwitch";

const SecuritySettings = () => {
    return (
        <SettingsSection title="Security">
            <ul className="space-y-2 text-sm">
                <li>
                    <ToggleSwitch
                        id="dark-mode-toggle"
                        checked={getIsDark()}
                        onChange={(e) =>
                            setIsDark(e === true ? "dark" : "light")
                        }
                        label="Dark mode"
                    />
                </li>
                <li>
                    Two-factor authentication: <em>Not enabled</em> (WIP)
                </li>
                <li>View active sessions (WIP)</li>
            </ul>
        </SettingsSection>
    );
};

export default SecuritySettings;
