"use client";

import { useEffect } from "react";

import { Title } from "@/components/common/title";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <Title>500 - Server-side error occurred</Title>;
}
