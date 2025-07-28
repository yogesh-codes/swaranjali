import { redirect } from "next/navigation";
import { createServerSupabase } from "@/shared/utils/supabase/server";
import MyLoginPage from "@/features/login/components/MyLoginPage";

export default async function Page() {
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
    return <MyLoginPage />;
}
