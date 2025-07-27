// hooks/useProfileLink.ts
import { createBrowserSupabase } from "@/shared/utils/supabase/client";

export async function useProfileLink(): Promise<string | undefined> {
    const supabase = createBrowserSupabase();

    const { data, error } = await supabase.auth.getUser();
    if (!error) {
        if (data.user) return "/logout";
        else return "/login";
    }
}
