import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getQueryString<T extends Record<string, string>>(params: T) {
  const queryString = new URLSearchParams(params).toString()
  return queryString ?? '';
}
