import Link from "next/link";
import { signUp } from "../actions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default async function SignupPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const params = await searchParams;
  return (
    <section className="section">
      <Card className="mx-auto max-w-md">
        <h1 className="text-2xl font-black">Create Student Account</h1>
        {params.error ? <p className="mt-4 rounded-md bg-red-100 p-3 text-sm text-red-800">{params.error}</p> : null}
        <form action={signUp} className="mt-5 grid gap-3">
          <Input name="full_name" placeholder="Full name" required />
          <Input type="email" name="email" placeholder="Email" required />
          <Input type="password" name="password" placeholder="Password" minLength={8} required />
          <Button>Create Account</Button>
        </form>
        <p className="mt-5 text-sm">Already registered? <Link href="/auth/login" className="font-semibold text-emerald-700">Login</Link></p>
      </Card>
    </section>
  );
}
