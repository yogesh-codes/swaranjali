import { redirect } from "next/navigation";
import { createServerSupabase } from "@/shared/utils/supabase/server";
import MyLoginPage from "@/features/login/components/MyLoginPage";
import {
    AllowedMsgType,
    allowedMsgTypes,
} from "@/shared/components/FlashMessage";

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{
        msg?: string;
        msgType?: string;
    }>;
}) {
    //If logged in, redirect..
    const supabase = await createServerSupabase();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (user) {
        console.log(
            "Already signed in user attempting to '/login'. Redirecting to '/dashboard'."
        );
        return redirect("/dashboard");
    }

    //So not logged in yet

    const { msg, msgType } = await searchParams;

    if (msg && msgType && allowedMsgTypes.includes(msgType as AllowedMsgType)) {
        return (
            <MyLoginPage
                flash={{ msg: msg, msgType: msgType as AllowedMsgType }}
            />
        );
    } else return <MyLoginPage />;
}
