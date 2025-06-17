import React from "react";
import { motion } from "motion/react";

interface SettingsSectionProps {
    title: string;
    children: React.ReactNode;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({
    title,
    children,
}) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-6 rounded-2xl bg-n-100 p-6 shadow-sm"
    >
        <h2 className="mb-4 text-xl font-semibold">{title}</h2>
        {children}
    </motion.div>
);

export default SettingsSection;
