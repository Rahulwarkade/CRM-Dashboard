"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  resetKey?: string | number | boolean | null | undefined;
}

export default function ErrorBoundary({
  children,
  fallback,
  onError,
  resetKey,
}: ErrorBoundaryProps) {
  const [error, setError] = useState<Error | null>(null);
  const pathname = usePathname();

  // Reset error state when pathname or resetKey changes
  useEffect(() => {
    setError(null);
  }, [pathname, resetKey]);

  if (error) {
    return (
      fallback || (
        <div className="p-4 border border-red-300 bg-red-50 rounded-md">
          <h3 className="text-lg font-medium text-red-800 mb-2">
            Something went wrong in this section
          </h3>
          <p className="text-sm text-red-600 mb-4">
            This section encountered an error. The rest of the page should still
            work.
          </p>
          {process.env.NODE_ENV === "development" && (
            <div className="bg-white p-3 rounded border border-red-200 mb-3">
              <p className="text-xs font-mono text-red-800 overflow-auto">
                {error.message}
              </p>
            </div>
          )}
          <button
            onClick={() => setError(null)}
            className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      )
    );
  }

  return (
    <ErrorBoundaryInternal
      onError={(error, errorInfo) => {
        setError(error);
        onError?.(error, errorInfo);
      }}
    >
      {children}
    </ErrorBoundaryInternal>
  );
}

class ErrorBoundaryInternal extends React.Component<{
  children: React.ReactNode;
  onError: (error: Error, errorInfo: React.ErrorInfo) => void;
}> {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.props.onError(error, errorInfo);
  }

  render() {
    return this.props.children;
  }
}
