import { Metadata } from "next";
import { submitRegistration } from "./actions";
import { Button } from "@/components/ui/button";
import { Input, Select, Textarea } from "@/components/ui/input";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollRevealWrapper } from "@/components/ui/scroll-reveal-wrapper";

export const metadata: Metadata = { title: "Register" };

export default async function RegisterPage({ searchParams }: { searchParams: Promise<{ success?: string; error?: string }> }) {
  const params = await searchParams;
  return (
    <section className="section">
      <SectionHeading eyebrow="Registration" title="Join MScom.lk classes" description="Register for online or physical A/L Commerce and Business Studies classes." />
      <ScrollRevealWrapper>
        <form action={submitRegistration} className="glass mx-auto grid max-w-4xl gap-4 rounded-lg p-4 sm:p-5 md:grid-cols-2">
        {params.success ? <p className="rounded-md bg-emerald-100 p-3 text-sm text-emerald-900 md:col-span-2">Registration submitted. We will contact you soon.</p> : null}
        {params.error ? <p className="rounded-md bg-red-100 p-3 text-sm text-red-800 md:col-span-2">{params.error}</p> : null}
        <Input name="full_name" placeholder="Full name" required />
        <Input name="school" placeholder="School" required />
        <Input name="district" placeholder="District" required />
        <Input name="phone" placeholder="Phone number" required />
        <Input name="parent_phone" placeholder="Parent phone number" required />
        <Input type="email" name="email" placeholder="Email" required />
        <Select name="stream" defaultValue="Commerce"><option>Commerce</option><option>Business Studies</option><option>Combined</option></Select>
        <Select name="class_type" defaultValue="Online"><option>Online</option><option>Physical</option><option>Hybrid</option></Select>
        <Textarea name="notes" placeholder="Notes" className="md:col-span-2" />
        <Button className="md:col-span-2">Submit Registration</Button>
        </form>
      </ScrollRevealWrapper>
    </section>
  );
}
