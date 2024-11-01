import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export function ErrorAlert({
  title = "Error!",
  description = "Hubo un error inesperado.",
}) {
  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
