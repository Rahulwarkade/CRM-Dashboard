"use client";

import { useEffect } from "react";
import { logError, ErrorType } from "@/utils/errorHandler";
import PageError from "@/components/PageError";

export default function LoginError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to your error reporting service
    logError(error, ErrorType.AUTHENTICATION, {
      section: "login",
      digest: error.digest,
    });
  }, [error]);

  return (
    <PageError
      error={error}
      reset={reset}
      title="Login Error"
      description="We encountered an error while processing your login. Please try again or contact support if the problem persists."
    />
  );
}
