import { resetPassword } from "../actions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default async function ResetPasswordPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const params = await searchParams;
  return (
    <section className="section">
      <Card className="mx-auto max-w-md">
        <h1 className="text-2xl font-black">Password Reset</h1>
        <p className="mt-2 text-sm text-emerald-950/60 dark:text-white/60">We will email a reset link to your account.</p>
        {params.error ? <p className="mt-4 rounded-md bg-red-100 p-3 text-sm text-red-800">{params.error}</p> : null}
        <form action={resetPassword} className="mt-5 grid gap-3">
          <Input type="email" name="email" placeholder="Email" required />
          <Button>Send Reset Link</Button>
        </form>
      </Card>
    </section>
  );
}
