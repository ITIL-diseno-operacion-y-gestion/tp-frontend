"use client";

import { useEffect } from "react";

import { SubTitle } from "@/components/common/subtitle";
import { Title } from "@/components/common/title";
import { Button } from "@/components/ui/button";
import { env } from "@/env/client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Title>Hubo un error inesperado</Title>
      <div className="mb-6 space-y-6 text-center">
        {error.digest && (
          <p className="text-sm text-gray-500">Error ID: {error.digest}</p>
        )}
        <Button onClick={() => reset()}>Intentar devuelta</Button>
      </div>
      {env.NODE_ENV === "development" && (
        <SubTitle>
          {error.name} {error.message}
        </SubTitle>
      )}
    </>
  );
}
