"use client";

import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import { logError, ErrorType } from "@/utils/errorHandler";

// Example component that might throw an error
const PotentiallyErrorProneComponent = () => {
  // Simulating a component that might throw an error
  const [shouldError, setShouldError] = React.useState(false);

  if (shouldError) {
    throw new Error("This is a simulated error in the component");
  }

  return (
    <div className="p-4 border rounded-md">
      <h3 className="font-medium mb-2">Potentially Error Prone Component</h3>
      <p className="mb-4">This component might throw an error.</p>
      <button
        onClick={() => setShouldError(true)}
        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Trigger Error
      </button>
    </div>
  );
};

// Example of how to use the ErrorBoundary
export default function ExampleWithErrorBoundary() {
  const [key, setKey] = React.useState(0);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Error Boundary Example</h2>

      {/* Normal content that won't be affected by errors in the error boundary */}
      <div className="p-4 bg-gray-100 rounded-md">
        <p>
          This content will always render, even if the component below errors.
        </p>
      </div>

      {/* Component wrapped in error boundary */}
      <ErrorBoundary
        fallback={
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-md">
            <h3 className="text-lg font-medium text-orange-800 mb-2">
              Component Error
            </h3>
            <p className="text-sm text-orange-700 mb-4">
              This specific component encountered an error but the rest of the
              page is still functional.
            </p>
            {process.env.NODE_ENV === "development" && (
              <div className="bg-white p-3 rounded border border-orange-200 mb-3">
                <p className="text-xs font-mono text-orange-800">
                  An error occurred in this component
                </p>
              </div>
            )}
            <button
              onClick={() => setKey((prev) => prev + 1)}
              className="px-3 py-1 bg-orange-600 text-white text-sm rounded hover:bg-orange-700"
            >
              Retry Component
            </button>
          </div>
        }
        resetKey={key}
        onError={(error, errorInfo) => {
          // Log the error to your error reporting service
          logError(error, ErrorType.UNKNOWN, {
            component: "PotentiallyErrorProneComponent",
            errorInfo: {
              componentStack: errorInfo.componentStack,
            },
          });
        }}
      >
        <PotentiallyErrorProneComponent />
      </ErrorBoundary>

      {/* More content that won't be affected */}
      <div className="p-4 bg-gray-100 rounded-md">
        <p>
          This content will also always render, demonstrating that the error is
          contained.
        </p>
      </div>
    </div>
  );
}
