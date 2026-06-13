import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const styles = {
  primary: "bg-emerald-700 text-white shadow-glow transition-all duration-300 hover:bg-emerald-800 hover:shadow-glow hover:scale-105 active:scale-95",
  secondary: "border border-emerald-700/20 bg-white/80 text-emerald-950 transition-all duration-300 hover:bg-gold-50 hover:scale-105 dark:bg-white/10 dark:text-white active:scale-95",
  ghost: "text-emerald-900 transition-all duration-300 hover:bg-emerald-50 hover:scale-105 dark:text-emerald-50 dark:hover:bg-white/10 active:scale-95"
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn("inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition", styles[variant], className)}
      {...props}
    />
  );
}

export function ButtonLink({ href, className, variant = "primary", children }: { href: string; className?: string; variant?: ButtonProps["variant"]; children: ReactNode }) {
  return (
    <Link href={href} className={cn("inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition", styles[variant], className)}>
      {children}
    </Link>
  );
}
