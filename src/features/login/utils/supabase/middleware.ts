// import { createServerClient } from "@supabase/ssr";
// import { NextResponse, type NextRequest } from "next/server";

// export async function updateSession(request: NextRequest) {
//     let supabaseResponse = NextResponse.next({
//         request,
//     });

//     const supabase = createServerClient(
//         process.env.NEXT_PUBLIC_SUPABASE_URL!,
//         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//         {
//             cookies: {
//                 getAll() {
//                     return request.cookies.getAll();
//                 },
//                 setAll(cookiesToSet) {
//                     cookiesToSet.forEach(({ name, value, options }) =>
//                         request.cookies.set(name, value)
//                     );
//                     supabaseResponse = NextResponse.next({
//                         request,
//                     });
//                     cookiesToSet.forEach(({ name, value, options }) =>
//                         supabaseResponse.cookies.set(name, value, options)
//                     );
//                 },
//             },
//         }
//     );

//     // IMPORTANT: Avoid writing any logic between createServerClient and
//     // supabase.auth.getUser(). A simple mistake could make it very hard to debug
//     // issues with users being randomly logged out.

//     const {
//         data: { user },
//     } = await supabase.auth.getUser();

//     // IMPORTANT: You *must* return the supabaseResponse object as it is. If you're
//     // creating a new response object with NextResponse.redirect() or similar, make
//     // sure to:
//     // 1. Pass the request in it, like NextResponse.redirect(url, { request })
//     // 2. Copy over the cookies, like:
//     //    const redirectResponse = NextResponse.redirect(url, { request })
//     //    redirectResponse.cookies.set(supabaseResponse.cookies)

//     return supabaseResponse;
// }
