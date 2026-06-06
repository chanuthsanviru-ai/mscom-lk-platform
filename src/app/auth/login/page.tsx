import Link from "next/link";
import { signIn } from "../actions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string; message?: string }> }) {
  const params = await searchParams;
  return (
    <section className="section">
      <Card className="mx-auto max-w-md">
        <h1 className="text-2xl font-black">Student Login</h1>
        <p className="mt-2 text-sm text-emerald-950/60 dark:text-white/60">Access your MScom.lk dashboard.</p>
        {params.error ? <p className="mt-4 rounded-md bg-red-100 p-3 text-sm text-red-800">{params.error}</p> : null}
        {params.message ? <p className="mt-4 rounded-md bg-emerald-100 p-3 text-sm text-emerald-900">{params.message}</p> : null}
        <form action={signIn} className="mt-5 grid gap-3">
          <Input type="email" name="email" placeholder="Email" required />
          <Input type="password" name="password" placeholder="Password" required />
          <Button>Login</Button>
        </form>
        <div className="mt-5 flex justify-between text-sm"><Link href="/auth/signup">Create account</Link><Link href="/auth/reset-password">Forgot password?</Link></div>
      </Card>
    </section>
  );
}
