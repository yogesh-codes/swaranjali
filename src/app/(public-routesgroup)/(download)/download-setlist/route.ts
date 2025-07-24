// app/download-brochure/route.ts
import { NextResponse } from "next/server";

export async function GET() {
    const uploadUrl =
        "https://z9ytql3lzk.ufs.sh/f/voJLSVPgihs2vAzUbSPgihs2XulQpE1OKaD5qjdoWRYzAbyF";
    const res = await fetch(uploadUrl);
    if (!res.ok) {
        return NextResponse.error();
    }

    // Pull the PDF in as a true ArrayBuffer (BodyInit ✔︎)
    const arrayBuffer = await res.arrayBuffer();

    return new NextResponse(arrayBuffer, {
        status: 200,
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition":
                'attachment; filename="thankyou-for-visiting-yogeshv.pdf"',
        },
    });
}
