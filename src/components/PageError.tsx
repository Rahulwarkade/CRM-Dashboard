"use client";

import React from "react";
import { logError, ErrorType } from "@/utils/errorHandler";

interface PageErrorProps {
  error: Error;
  reset: () => void;
  title?: string;
  description?: string;
}

export default function PageError({
  error,
  reset,
  title = "Something went wrong!",
  description = "We encountered an error while loading this page.",
}: PageErrorProps) {
  React.useEffect(() => {
    // Log the error when the component mounts
    logError(error, ErrorType.UNKNOWN, {
      component: "PageError",
      page: typeof window !== "undefined" ? window.location.pathname : "",
    });
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>

        {process.env.NODE_ENV === "development" && (
          <div className="bg-gray-50 p-3 rounded border border-gray-200 mb-6 overflow-auto max-h-32">
            <p className="text-xs font-mono text-red-600">{error.message}</p>
            {error.stack && (
              <pre className="text-xs font-mono text-gray-600 mt-2 whitespace-pre-wrap">
                {error.stack.split("\n").slice(1, 4).join("\n")}
              </pre>
            )}
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={reset}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
