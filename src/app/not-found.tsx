import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section text-center">
      <h1 className="text-4xl font-black">Page not found</h1>
      <p className="mt-3 text-emerald-950/60 dark:text-white/60">The page you are looking for is unavailable.</p>
      <ButtonLink href="/" className="mt-6">Back Home</ButtonLink>
    </section>
  );
}
