// app/logout/route.ts
import { NextResponse } from "next/server";
import { createServerSupabase } from "@/shared/utils/supabase/server";

export async function POST() {
    const supabase = await createServerSupabase();
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error("Logout failed:", error.message);
        return NextResponse.json(
            {
                success: false,
                errorCode: error.code,
                errorMessage: error.message,
                httpStatus: error.status,
            },
            { status: 500 }
        );
    }

    // Optionally clear any cookies here if you set them manually
    return NextResponse.json({ success: true });
}
