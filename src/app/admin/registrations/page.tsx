import { requireAdmin } from "@/lib/auth";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default async function AdminRegistrationsPage({ searchParams }: { searchParams: Promise<{ q?: string; type?: string }> }) {
  const params = await searchParams;
  const { supabase } = await requireAdmin();
  let query = supabase.from("registrations").select("*").order("created_at", { ascending: false });
  if (params.q) query = query.or(`full_name.ilike.%${params.q}%,school.ilike.%${params.q}%,district.ilike.%${params.q}%`);
  if (params.type) query = query.eq("class_type", params.type);
  const { data } = await query;
  return (
    <section className="section"><div className="mx-auto max-w-7xl"><div className="flex justify-between gap-4"><h1 className="text-3xl font-black">Registrations</h1><ButtonLink href="/api/admin/registrations/export">Export CSV</ButtonLink></div><Card className="mt-6 overflow-x-auto"><table className="w-full min-w-[760px] text-sm"><thead><tr className="text-left"><th>Name</th><th>School</th><th>District</th><th>Phone</th><th>Parent</th><th>Type</th></tr></thead><tbody>{data?.map((r) => <tr className="border-t" key={r.id}><td className="py-3">{r.full_name}</td><td>{r.school}</td><td>{r.district}</td><td>{r.phone}</td><td>{r.parent_phone}</td><td>{r.class_type}</td></tr>)}</tbody></table></Card></div></section>
  );
}
