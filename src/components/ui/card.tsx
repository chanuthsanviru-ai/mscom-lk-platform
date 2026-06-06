import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("rounded-lg border border-emerald-900/10 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-glow dark:border-white/10 dark:bg-white/10", className)}>{children}</div>;
}
