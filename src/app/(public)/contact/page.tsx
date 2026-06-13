import { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import { submitContact } from "./actions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { SectionHeading } from "@/components/ui/section-heading";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = { title: "Contact" };

export default async function ContactPage({
  searchParams
}: {
  searchParams: Promise<{ success?: string; error?: string }>;
}) {
  const params = await searchParams;

  return (
    <section className="section">
      <SectionHeading
        eyebrow="Contact"
        title="Talk to the MScom.one team"
        description="Use WhatsApp for the fastest reply or send a contact request."
      />

      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-4">
          <Card>
            <MessageCircle className="text-gold-500" />
            <h2 className="mt-3 font-bold">WhatsApp Hotline</h2>
            <a
              className="mt-3 inline-flex font-semibold text-emerald-700 dark:text-gold-100"
              href={whatsappLink()}
            >
              Message on WhatsApp
            </a>
          </Card>

          <Card>
            <Phone className="text-gold-500" />
            <h2 className="mt-3 font-bold">Hotline</h2>
            <p className="mt-2 text-sm">+94 71 809 6628</p>
          </Card>

          <div className="grid min-h-56 place-items-center rounded-2xl border border-dashed border-emerald-900/20 bg-white/50 text-sm text-emerald-950/60 dark:border-white/15 dark:bg-white/5 dark:text-white/60">
            Google Maps Placeholder
          </div>
        </div>

        <form action={submitContact} className="glass grid gap-4 rounded-3xl p-6">
          {params.success ? (
            <p className="rounded-md bg-emerald-100 p-3 text-sm text-emerald-900">
              Message received. We will contact you soon.
            </p>
          ) : null}

          {params.error ? (
            <p className="rounded-md bg-red-100 p-3 text-sm text-red-800">
              {params.error}
            </p>
          ) : null}

          <Input name="name" placeholder="Name" required />
          <Input name="phone" placeholder="Phone" required />
          <Input type="email" name="email" placeholder="Email" />
          <Textarea name="message" placeholder="Message" required />
          <Button>Send Message</Button>
        </form>
      </div>
    </section>
  );
}
