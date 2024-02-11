import axios from "axios"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const API = axios.create({
  baseURL: "http://152.53.12.218",
})

export const authToken = document.cookie
  .split("; ")
  .find((cookie) => cookie.startsWith("auth-token="))
  ?.split("=")[1]
