import React from "react";

const ToggleSwitch: React.FC<{
    id: string;
    checked: boolean;
    onChange: (v: boolean) => void;
    label: string;
}> = ({ id, checked, onChange, label }) => (
    <div className="flex items-center justify-between py-2">
        <label htmlFor={id} className="text-sm font-medium">
            {label}
        </label>
        <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-gray-300 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700"
            role="switch"
            aria-checked={checked}
        />
    </div>
);

export default ToggleSwitch;
