"use client";
// File: /app/components/Countdown.tsx
// ---------------------------------------------------
// Tailwind v4 + Next 15.3.2 (App Router) + TypeScript

import { useState, useEffect } from "react";

interface CountdownProps {
    /** An ISO-8601 date string, e.g. "2025-12-31T23:59:59Z" */
    targetDate: string;
}

interface TimeParts {
    total: number; // total milliseconds remaining
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown({ targetDate }: CountdownProps) {
    // 1) Helper: calculate the time difference between now and targetDate
    const calculateTimeLeft = (): TimeParts => {
        const now = new Date().getTime();
        const end = new Date(targetDate).getTime();
        const total = end - now;

        if (total <= 0) {
            return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        // compute each unit
        const secondsTotal = Math.floor(total / 1000);
        const days = Math.floor(secondsTotal / (3600 * 24));
        const hours = Math.floor((secondsTotal % (3600 * 24)) / 3600);
        const minutes = Math.floor((secondsTotal % 3600) / 60);
        const seconds = Math.floor(secondsTotal % 60);

        return { total, days, hours, minutes, seconds };
    };

    // 2) State to hold the countdown parts
    const [timeLeft, setTimeLeft] = useState<TimeParts>(() =>
        calculateTimeLeft()
    );

    // 3) Every second, recalc. Clear on unmount or if targetDate changes.
    useEffect(() => {
        const timerId = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timerId);
    }, [targetDate, calculateTimeLeft]);

    // 4) If time is up, show a message
    if (timeLeft.total <= 0) {
        return (
            <div className="flex items-center justify-center p-4 bg-red-50 rounded-md">
                <span className="text-lg font-medium text-red-600">
                    Time’s up!
                </span>
            </div>
        );
    }

    // 5) Otherwise, render days | hours | minutes | seconds
    return (
        <div className="flex space-x-6 p-4 bg-nlight/40 rounded-lg">
            {/* Days */}
            <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary">
                    {/* //text-gray-800 */}
                    {timeLeft.days}
                </span>
                <span className="text-sm font-medium ">Days</span>
                {/* text-gray-600 */}
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-ndark">
                    {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-ndark">Hours</span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-ndark">
                    {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-ndark">Minutes</span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-ndark">
                    {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-ndark">Seconds</span>
            </div>
        </div>
    );
}
