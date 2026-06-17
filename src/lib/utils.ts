import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function whatsappLink(message = "Hey I would like to join the class sir") {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "94718096628";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
