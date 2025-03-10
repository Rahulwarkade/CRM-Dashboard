"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error occurred:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Something went wrong!
            </h1>
            <p className="text-gray-600 mb-6">
              We apologize for the inconvenience. Our team has been notified of
              this issue.
            </p>
            {error.message && process.env.NODE_ENV === "development" && (
              <div className="bg-red-50 p-4 rounded-md mb-6">
                <p className="text-sm text-red-800 font-mono">
                  {error.message}
                </p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => reset()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Try again
              </button>
              <Link
                href="/"
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-center"
              >
                Go back home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
