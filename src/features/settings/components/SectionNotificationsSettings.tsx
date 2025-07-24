import React, { useState } from "react";
import SettingsSection from "./SettingsSection";
import ToggleSwitch from "./ToggleSwitch";

const NotificationsSettings = () => {
    const [marketingEmails, setMarketingEmails] = useState(true);
    const [bookingEmails, setBookingEmails] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [smsAlerts, setSmsAlerts] = useState(false);

    return (
        <SettingsSection title="Notifications">
            <ToggleSwitch
                id="marketing-emails"
                checked={marketingEmails}
                onChange={setMarketingEmails}
                label="Marketing Emails"
            />
            <ToggleSwitch
                id="booking-emails"
                checked={bookingEmails}
                onChange={setBookingEmails}
                label="Booking Emails"
            />
            <ToggleSwitch
                id="push-notifications"
                checked={pushNotifications}
                onChange={setPushNotifications}
                label="Push Notifications"
            />
            <ToggleSwitch
                id="sms-alerts"
                checked={smsAlerts}
                onChange={setSmsAlerts}
                label="SMS Alerts"
            />
        </SettingsSection>
    );
};

export default NotificationsSettings;
