// app/dashboard/page.tsx
import { redirect } from "next/navigation";
import { createClient } from "@/src/features/login/utils/supabase/server";
import Link from "next/link";

export default async function DashboardPage() {
    // 1. Wire up the SSR Supabase client (has cookie access)
    const supabase = await createClient();

    // 2. Fetch the current session
    const {
        data: { session },
        error,
    } = await supabase.auth.getSession();

    // 3. If there's no session, send them back to /login with error string
    if (!session) {
        const errorURIString = encodeURIComponent(
            "You need to log in to view the dashboard"
        );
        return redirect(`/login?error=${errorURIString}`);
    }

    if (error) {
        const errorURIString = encodeURIComponent(
            `Some error occured\n${error.name}-${error.code}\nCause=${error.cause}\nMessage=${error.message}`
        );
        return redirect(`/login?error=${errorURIString}`);
    }

    // If there is session, there is user. so we know the user is authenticated
    const user = session.user;

    return (
        <main className="p-8">
            <h1 className="font-bold">Hey there!</h1>
            <h3>Information about your account</h3>
            <p>Your email: {user.email}</p>
            <p>Your account was created on {user.created_at}</p>
            <p>
                Go to <Link href={"/settings"}>settings[wip]</Link>
            </p>
            <br />
        </main>
    );
}
