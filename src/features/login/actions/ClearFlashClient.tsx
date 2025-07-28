"use client";
import { useEffect } from "react";
import { clearFlash } from "../../../shared/components/flash/actions/clearFlash";

export default function ClearFlashClient() {
    useEffect(() => {
        void clearFlash("/login");
    }, []);
    return null;
}
