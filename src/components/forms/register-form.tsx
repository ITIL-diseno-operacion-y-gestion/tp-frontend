"use client";

import Link from "next/link";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function SignupForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Registrarse</CardTitle>
        <CardDescription>
          Escribí tu nombre, email y contraseña para registrarte.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" placeholder="Juan" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" placeholder="********" />
          </div>
          <Button type="submit" className="w-full">
            Crear tu cuenta
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Ya tenés una cuenta?{" "}
          <Link href="/auth/login" className="underline">
            Iniciar sesión
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
