//Imports
import React from "react";

//Components
import Countdown from "./Countdown";

//Shared
import { websiteEventDate } from "@/shared/assets/websiteData";
import { announceDate } from "@/shared/utils/dateUtils";

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
