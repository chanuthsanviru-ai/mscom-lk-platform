"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function submitContact(formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.from("contact_messages").insert({
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? "")
  });

  if (error) redirect(`/contact?error=${encodeURIComponent(error.message)}`);
  redirect("/contact?success=1");
}
