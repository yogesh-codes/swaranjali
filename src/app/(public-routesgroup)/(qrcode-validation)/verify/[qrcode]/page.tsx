import { SparklesCore } from "@/shared/components/ui/sparkles";
import MyPageContent from "@/shared/components/MyPageContent";
import Button from "@/shared/components/Button";
import Link from "next/link";
import { websiteMainFont } from "@/shared/assets/websiteData";

export default function VerifyQRCode({
    params,
}: {
    params: { qrcode: string };
}) {
    const isVerified = params.qrcode === "YOGE-1234";

    return (
        <section className="relative bg-primary min-h-[480px]">
            <div className="absolute w-full h-full backdrop:blur-xl bg-nlight/60"></div>
            <MyPageContent>
                <div className="pt-30 pb-5">
                    <h1 className={`text-4xl font-bold mb-6 text-center`}>
                        QR Code Verification
                    </h1>

                    <p>{params.qrcode}</p>
                    <div className="flex flex-col items-center justify-center">
                        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center">
                            {isVerified ? (
                                <div className="text-green-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-24 w-24 mx-auto mb-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <h2 className="text-2xl font-bold mb-2">
                                        Verified Successfully!
                                    </h2>
                                    <p>Your QR code has been verified.</p>

                                    <p>Name: </p>
                                    <p>Seat Type: Standard Pass | VIP Pass</p>
                                    <p>
                                        Ticked was paid for on 21st august,
                                        2:36:46 PM
                                    </p>

                                    <p>Other Details</p>
                                    <p>Email:</p>
                                    <p>Number of members ticket:</p>
                                    <p>See you soon!</p>
                                </div>
                            ) : (
                                <div className="text-red-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-24 w-24 mx-auto mb-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                    <h2 className="text-2xl font-bold mb-2">
                                        Verification Failed
                                    </h2>
                                    <p>
                                        Invalid or expired QR code. Please try
                                        again.
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col items-center content-center justify-center gap-2 pt-5">
                            <Link href="/">
                                <Button
                                    variant="outline"
                                    className="max-w-full w-60 rounded-2xl"
                                >
                                    Back to Home
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </MyPageContent>
        </section>
    );
}
