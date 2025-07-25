import { redirect } from "next/navigation";
import { createClient } from "@/features/login/utils/supabase/server";
import MyLoginPage, {
    LoginPageProps,
} from "@/features/login/components/MyLoginPage";

// type LoginPageProps = {
//     searchParams: Promise<{ error?: string | string[] }>;
// };

/*
If already logged in, redirect to dashboard.
Else render LoginPage
*/

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{
        msg?: string;
        msgType?: string;
    }>;
}) {
    //If logged in, redirect..
    const supabase = await createClient();
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
    if (
        msg &&
        msgType &&
        ["success", "error", "warning", "error"].includes(msgType)
    ) {
        return <MyLoginPage flash={{ msg: msg, msgType: msgType }} />;
    } else return <MyLoginPage />;
}
