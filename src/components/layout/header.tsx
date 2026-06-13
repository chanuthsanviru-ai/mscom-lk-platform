import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { navItems } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="animate-slide-down sticky top-0 z-50 border-b border-emerald-900/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-emerald-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-md bg-emerald-800 text-lg font-black text-gold-100">MS</span>
          <span>
            <span className="block text-lg font-black text-emerald-950 dark:text-white">MScom.one</span>
            <span className="block text-xs text-emerald-900/60 dark:text-white/60">Commerce Academy</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-emerald-950/75 transition hover:text-emerald-700 dark:text-white/75 dark:hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={whatsappLink()} className="hidden h-10 items-center justify-center rounded-md border border-emerald-700/20 px-3 text-emerald-800 transition hover:bg-emerald-50 dark:text-emerald-50 md:inline-flex" aria-label="WhatsApp">
            <MessageCircle size={18} />
          </a>
          <ButtonLink href="/register" className="hidden md:inline-flex">Register</ButtonLink>
          <details className="relative lg:hidden">
            <summary className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-emerald-900/10" aria-label="Menu"><Menu size={20} /></summary>
            <div className="absolute right-0 mt-3 grid w-48 gap-1 rounded-lg border border-emerald-900/10 bg-white p-2 shadow-glow dark:border-white/10 dark:bg-emerald-950">
              {navItems.map((item) => <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-emerald-50 dark:hover:bg-white/10">{item.label}</Link>)}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
