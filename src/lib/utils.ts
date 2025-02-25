import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import isEmpty from 'lodash.isempty';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getQueryString<T extends Record<string, string>>(params: T) {
  const queryString = new URLSearchParams(params).toString()
  return queryString ?? '';
}

export const toFormData = (
  obj: Record<string, string | number | boolean | File | Blob | null | undefined>
): FormData => {
  const formData = new FormData();
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      formData.append(key, value instanceof File || value instanceof Blob ? value : String(value));
    }
  });
  return formData;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const hasData = (data: any): boolean => !isEmpty(data) && !!data;
