import { createServerSupabase } from "@/shared/utils/supabase/server";
import { NextURL } from "next/dist/server/web/next-url";

import { redirect } from "next/navigation";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const supabase = await createServerSupabase();

    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();

    if (error) {
        console.log(error.code, error.message, error.name, error.status);
    }
    if (!user) {
        console.log("protectedpage layout- You need to login first");

        const redirectUrlString = `/login?msg=${encodeURIComponent(
            "Please login first"
        )}&msgType=${encodeURIComponent("error")}`;

        redirect(redirectUrlString);
    }

    //Here=> youre logged in
    return <>{children}</>;
}
