import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn("w-full rounded-md border border-emerald-900/15 bg-white px-4 py-3 text-sm outline-none ring-gold-400 transition focus:ring-2 dark:border-white/10 dark:bg-white/10", props.className)} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn("min-h-28 w-full rounded-md border border-emerald-900/15 bg-white px-4 py-3 text-sm outline-none ring-gold-400 transition focus:ring-2 dark:border-white/10 dark:bg-white/10", props.className)} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn("w-full rounded-md border border-emerald-900/15 bg-white px-4 py-3 text-sm outline-none ring-gold-400 transition focus:ring-2 dark:border-white/10 dark:bg-white/10", props.className)} />;
}
