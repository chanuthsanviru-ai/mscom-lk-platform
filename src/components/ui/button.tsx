import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const styles = {
  primary: "bg-red-700 text-white shadow-glow hover:bg-red-800",
  secondary: "border border-red-700/20 bg-white/80 text-red-950 hover:bg-gold-50 dark:bg-white/10 dark:text-white",
  ghost: "text-red-900 hover:bg-red-50 dark:text-red-50 dark:hover:bg-white/10"
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
