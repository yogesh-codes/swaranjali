"use client";
import React, { useState } from "react";
import SettingsSection from "./SettingsSection";

const GeneralSettingsSection = () => {
    const [language, setLanguage] = useState<string>("en");
    const [timezone, setTimezone] = useState<string>("UTC");

    return (
        <SettingsSection title="General">
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="language-select"
                        className="block text-sm font-medium"
                    >
                        Language
                    </label>
                    <select
                        id="language-select"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="zh">中文</option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="timezone-select"
                        className="block text-sm font-medium"
                    >
                        Timezone
                    </label>
                    <select
                        id="timezone-select"
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="UTC">UTC</option>
                        <option value="Asia/Kolkata">Asia/Kolkata</option>
                        <option value="America/New_York">
                            America/New York
                        </option>
                        <option value="Europe/London">Europe/London</option>
                    </select>
                </div>
            </div>
        </SettingsSection>
    );
};

export default GeneralSettingsSection;
