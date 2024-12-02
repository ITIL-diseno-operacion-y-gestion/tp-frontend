import { useState } from "react";

import { cn } from "@/lib/utils";

import { Eye, EyeClosed } from "lucide-react";

import { TextField } from "./form/text-field";

export function PasswordField({
  error,
  name = "contrasenia",
  className,
}: {
  error?: string[];
  name?: string;
  className?: string;
}) {
  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password",
  );

  const togglePassword = () => {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div
      className={cn("relative flex items-end justify-between gap-4", className)}
    >
      <TextField
        name={name}
        type={passwordType}
        label="Contraseña"
        autoComplete="current-password"
        className=""
        error={error}
        required
      />
      {passwordType === "password" ? (
        <EyeClosed
          onClick={togglePassword}
          className="absolute bottom-2 right-2 size-6 cursor-pointer"
        />
      ) : (
        <Eye
          onClick={togglePassword}
          className="absolute bottom-2 right-2 size-6 cursor-pointer"
        />
      )}
    </div>
  );
}
