import { websiteEventDate } from "@/assets/websiteData";
import Countdown from "@/app/(landing-page)/_components/Countdown";
import React from "react";
import { announceDate } from "@/app/(auth-group)/_utils/dateUtils";

const EventAnnouncementContainer = () => {
    return (
        <div className="pt-5 w-full flex flex-col items-center">
            <p className="w-fit px-5 bg-nlight/40 rounded-t-4xl text-center text-ndark">
                <b>{announceDate(websiteEventDate)}</b>
            </p>
            <div className="flex flex-row justify-center items-center">
                <Countdown targetDate={websiteEventDate.toISOString()} />
            </div>
        </div>
    );
};

export default EventAnnouncementContainer;
