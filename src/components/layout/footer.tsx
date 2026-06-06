import Link from "next/link";
import { Facebook, Instagram, MessageCircle, Youtube } from "lucide-react";
import { navItems } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-emerald-900/10 bg-emerald-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-black text-gold-100">MScom.lk</p>
          <p className="mt-3 max-w-md text-sm text-white/70">Premium A/L Commerce and Business Studies classes for Sri Lankan students, built for online and physical learning.</p>
        </div>
        <div>
          <p className="font-semibold">Explore</p>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => <Link className="text-sm text-white/70 hover:text-white" key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <a className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-gold-100" href={whatsappLink()}><MessageCircle size={16} /> WhatsApp Hotline</a>
          <div className="mt-5 flex gap-3 text-white/70">
            <Facebook size={18} /><Instagram size={18} /><Youtube size={18} />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50">© {new Date().getFullYear()} MScom.lk. All rights reserved.</div>
    </footer>
  );
}
