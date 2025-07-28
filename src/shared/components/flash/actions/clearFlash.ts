// clearFlash.ts
"use server";
import { cookies } from "next/headers";

export async function clearFlash(pathUrl: string | undefined) {
    const cookieStore = await cookies();

    //   // If your flash cookie was set on the default path '/'
    //   cookieStore.delete('flash')               // ⇒ DELETE Set-Cookie: flash=; Path=/; Expires=...

    // If instead you scoped it to path '/login', you must overwrite it with maxAge:0 on the same path:
    cookieStore.set("flash", "", {
        maxAge: 0,
        path: pathUrl,
    });
    console.log("Flash cookie deleted.");
}
