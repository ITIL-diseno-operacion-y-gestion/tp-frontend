import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function uppercaseFirst(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

/** Function to fetch with a timeout and 
 * return a tuple with the error and the response */
export async function fetchWithTimeout(
  url: RequestInfo,
  options?: RequestInit,
  timeout = 5000,
) {
  try {
    const res = await fetch(url, { ...options, signal: AbortSignal.timeout(timeout) });
    return [null, res] as const;
  } catch (error) {
    return [error as Error, null] as const;
  }
}

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("es-AR");
}
