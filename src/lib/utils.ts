import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function uppercaseFirst(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export async function fetchWithTimeout(
  url: RequestInfo,
  options?: RequestInit,
  timeout = 5000,
) {
  return fetch(url, { ...options, signal: AbortSignal.timeout(timeout) });
}
