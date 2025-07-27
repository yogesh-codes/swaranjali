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
                router.refresh();
                router.replace("/");
                // once the POST completes (or errors), send them to /login
            }
        }

        void doSignOut();
    }, [router]);

    return (
        <div className="flex items-center justify-center h-screen px-4">
            <div className="text-center">
                <h1 className="text-xl font-semibold mb-2">Signing you out…</h1>
                <p className="text-sm text-gray-600">Redirecting to login</p>
            </div>
            <p>
                In case sign out fails, click here to manually go to homepage
                anyway
            </p>

            <p>{msg}</p>
            <Button variant="primary">Click here</Button>
        </div>
    );
}
