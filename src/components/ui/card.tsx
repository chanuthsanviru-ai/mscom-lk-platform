import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children, style }: { className?: string; children: ReactNode; style?: CSSProperties }) {
  return <div style={style} className={cn("rounded-lg border border-emerald-900/10 bg-white/80 p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-glow dark:border-white/10 dark:bg-white/10 overflow-hidden", className)}>{children}</div>;
}
