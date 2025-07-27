"use client";
// error boundaries must be client components
//You shouldnt be here. At best error.tsx shouldve been enough.
//=>Here => check your dependences of root layout.tsx

export default function GlobalError({ reset }: { reset: () => void }) {
    const logoUrl =
        "https://z9ytql3lzk.ufs.sh/f/voJLSVPgihs2wJgv2q3MWsdSuh9OQP2FizknZaVvxE1tqeK7";
    return (
        <html>
            <body className="min-h-screen flex items-center justify-center bg-primary-200">
                <div className="text-center p-8 flex flex-col items-center justify-center">
                    <div className="w-20">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="Swaranjali Logo" src={logoUrl}></img>
                    </div>
                    <h1 className={`text-3xl font-bold mb-4`}>
                        Something went wrong
                    </h1>
                    <p className="mb-6">Sorry, please visit us later.</p>
                    <button
                        onClick={() => reset()}
                        className="px-5 py-2 bg-primary-500 hover:bg-accent-500 text-white rounded-lg"
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}
