import { requireAdmin } from "@/lib/auth";

export async function GET() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("registrations").select("*").order("created_at", { ascending: false });
  const rows = (data ?? []) as Array<Record<string, unknown>>;
  const headers = ["full_name", "school", "district", "phone", "parent_phone", "email", "stream", "class_type", "notes", "created_at"];
  const csv = [headers.join(","), ...rows.map((row) => headers.map((key) => JSON.stringify(row[key] ?? "")).join(","))].join("\n");
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=mscom-registrations.csv"
    }
  });
}
