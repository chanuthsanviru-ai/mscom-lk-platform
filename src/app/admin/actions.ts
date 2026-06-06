"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";

export async function createAnnouncement(formData: FormData) {
  const { supabase } = await requireAdmin();
  await supabase.from("announcements").insert({ title: String(formData.get("title")), body: String(formData.get("body")), is_published: formData.get("is_published") === "on" });
  revalidatePath("/admin");
}

export async function createSchedule(formData: FormData) {
  const { supabase } = await requireAdmin();
  await supabase.from("schedules").insert({
    title: String(formData.get("title")),
    subject: String(formData.get("subject")),
    mode: String(formData.get("mode")),
    class_date: String(formData.get("class_date")),
    fee: String(formData.get("fee")),
    is_active: formData.get("is_active") === "on"
  });
  revalidatePath("/admin/schedules");
}

export async function createTestimonial(formData: FormData) {
  const { supabase } = await requireAdmin();
  await supabase.from("testimonials").insert({ name: String(formData.get("name")), meta: String(formData.get("meta")), quote: String(formData.get("quote")), is_published: true });
  revalidatePath("/admin/testimonials");
}

export async function createResource(formData: FormData) {
  const { supabase } = await requireAdmin();
  const file = formData.get("file") as File | null;
  let fileUrl = String(formData.get("file_url") ?? "");

  if (file && file.size > 0) {
    const path = `resources/${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage.from("resources").upload(path, file, { upsert: false });
    if (error) throw error;
    const { data: publicUrl } = supabase.storage.from("resources").getPublicUrl(data.path);
    fileUrl = publicUrl.publicUrl;
  }

  await supabase.from("resources").insert({ title: String(formData.get("title")), description: String(formData.get("description")), file_url: fileUrl, is_published: true });
  revalidatePath("/admin/resources");
}
