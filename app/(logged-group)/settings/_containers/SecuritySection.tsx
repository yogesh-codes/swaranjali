import React from "react";

import ToggleSwitch from "../_components/ToggleSwitch";
import {
    getIsDark,
    setIsDark,
} from "@/app/_theme-control/_components/ThemeControlMenu";
import SettingsSection from "../_components/SettingsSection";

const SecuritySection = () => {
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

export default SecuritySection;
