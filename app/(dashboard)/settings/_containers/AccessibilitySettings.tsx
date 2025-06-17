import React, { useState } from "react";
import SettingsSection from "../_components/SettingsSection";
import ToggleSwitch from "../_components/ToggleSwitch";

const AccessibilitySettings = () => {
    const [reduceMotion, setReduceMotion] = useState(false);
    const [highContrast, setHighContrast] = useState(false);

    return (
        <SettingsSection title="Accessibility">
            <ToggleSwitch
                id="reduce-motion"
                checked={reduceMotion}
                onChange={setReduceMotion}
                label="Reduce motion animations"
            />
            <ToggleSwitch
                id="high-contrast"
                checked={highContrast}
                onChange={setHighContrast}
                label="Enable high contrast"
            />
        </SettingsSection>
    );
};

export default AccessibilitySettings;
