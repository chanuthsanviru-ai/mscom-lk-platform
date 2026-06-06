import { BookOpen, CalendarDays, GraduationCap, Medal, MessageCircle, ShieldCheck, Users } from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/schedule", label: "Schedule" },
  { href: "/results", label: "Results" },
  { href: "/register", label: "Register" },
  { href: "/contact", label: "Contact" }
];

export const stats = [
  { label: "A/B Pass Rate", value: "82%" },
  { label: "District Rankers", value: "38+" },
  { label: "Years Teaching", value: "12+" },
  { label: "Students Guided", value: "4,500+" }
];

export const features = [
  { title: "Exam-first Teaching", description: "Theory, revision, paper practice, and marking schemes aligned to Sri Lankan A/L standards.", icon: GraduationCap },
  { title: "Mobile Learning", description: "Fast pages, downloadable resources, and dashboard access optimized for student phones.", icon: BookOpen },
  { title: "Trusted Support", description: "WhatsApp-first communication, parent contact tracking, and clear announcements.", icon: ShieldCheck }
];

export const upcomingClasses = [
  { title: "2026 A/L Business Studies", type: "Online", time: "Sunday 7.00 PM", price: "LKR 3,500 / month" },
  { title: "2027 A/L Commerce Theory", type: "Physical", time: "Saturday 8.30 AM", price: "LKR 4,000 / month" },
  { title: "2025 Final Revision", type: "Online + Physical", time: "Wednesday 6.30 PM", price: "LKR 5,000 / month" }
];

export const schedules = [
  { subject: "Business Studies", batch: "2026 Theory", mode: "Online", day: "Sunday", time: "7.00 PM - 9.30 PM", fee: "LKR 3,500" },
  { subject: "Commerce", batch: "2027 Theory", mode: "Physical", day: "Saturday", time: "8.30 AM - 11.30 AM", fee: "LKR 4,000" },
  { subject: "Business Studies", batch: "2025 Revision", mode: "Hybrid", day: "Wednesday", time: "6.30 PM - 9.30 PM", fee: "LKR 5,000" },
  { subject: "Commerce", batch: "Paper Class", mode: "Online", day: "Friday", time: "8.00 PM - 10.00 PM", fee: "LKR 2,500" }
];

export const testimonials = [
  { name: "Hiruni Perera", meta: "District Rank 12, Colombo", quote: "The paper discussion method helped me understand exactly how exam answers are marked." },
  { name: "Sahan Jayasinghe", meta: "A pass, Business Studies", quote: "Classes were clear, structured, and easy to follow even on mobile." },
  { name: "Nethmi Fernando", meta: "Island Merit", quote: "The revision plan gave me confidence during the last three months." }
];

export const achievementCards = [
  { title: "District Rankers", value: "38+", icon: Medal },
  { title: "A/B Passes", value: "82%", icon: Users },
  { title: "Seminars", value: "120+", icon: CalendarDays },
  { title: "Support Channel", value: "24/7", icon: MessageCircle }
];

export const faqs = [
  { q: "Can I join from outside Colombo?", a: "Yes. Online classes and downloadable resources are designed for students across Sri Lanka." },
  { q: "Do parents receive updates?", a: "The registration form collects parent contact details for notices, payment updates, and urgent class changes." },
  { q: "Are recordings available?", a: "The dashboard includes placeholders for future LMS access and resources, ready for recorded lessons when enabled." }
];
