import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const API = axios.create({
  baseURL: "http://152.53.12.218"
})
