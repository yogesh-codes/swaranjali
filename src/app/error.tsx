// app/error.tsx
"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function RootError({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    // Log the actual error to the console (or send to monitoring)
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg text-center">
                <h1 className="text-3xl font-bold mb-4">
                    Something went wrong
                </h1>
                <p className="text-gray-600 mb-6">Please visit us later.</p>
                {/* Optional “Try again” to re-render the tree */}
                <button
                    onClick={() => redirect("/")}
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                >
                    Try again
                </button>
                <p>(error)</p>
            </div>
        </div>
    );
}
