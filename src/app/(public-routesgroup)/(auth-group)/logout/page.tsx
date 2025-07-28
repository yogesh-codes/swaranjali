// app/logout/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/shared/components/Button";

export default function LogoutPage() {
    const router = useRouter();
    const [msg, setMsg] = useState<string>("msg will appear here.");

    useEffect(() => {
        async function doSignOut() {
            try {
                const data = await fetch("/auth/signout", { method: "POST" });
                console.log("fetch completed");
                console.log({ data });

                setMsg("fetch completed- " + JSON.stringify(await data.json()));
            } catch (err) {
                console.error("Logout failed:", err);
                setMsg(
                    "error thrown while trying to logout. shouldnt have happened."
                );
            } finally {
                window.location.assign("/");
                router.refresh();
                router.replace("/");
                // once the POST completes (or errors), send them to /login
            }
        }

        void doSignOut();
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center px-4">
            <div className="text-center">
                <h1 className="">Signing you out…</h1>
                <p className="text-sm text-n-600">Redirecting to login</p>
            </div>

            <p>{msg}</p>
            <p>In case sign out fails</p>
            <Button onClick={() => router.replace("/")} variant="primary">
                Click here
            </Button>
        </div>
    );
}
