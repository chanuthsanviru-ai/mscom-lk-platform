"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function submitRegistration(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const payload = {
    user_id: user?.id,
    full_name: String(formData.get("full_name") ?? ""),
    school: String(formData.get("school") ?? ""),
    district: String(formData.get("district") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    parent_phone: String(formData.get("parent_phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    stream: String(formData.get("stream") ?? "Commerce"),
    class_type: String(formData.get("class_type") ?? "Online"),
    notes: String(formData.get("notes") ?? "")
  };

  const { error } = await supabase.from("registrations").insert(payload);
  if (error) redirect(`/register?error=${encodeURIComponent(error.message)}`);
  redirect("/register?success=1");
}
