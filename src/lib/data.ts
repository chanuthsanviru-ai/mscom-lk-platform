import { BookOpen, CalendarDays, GraduationCap, Medal, MessageCircle, ShieldCheck, Users } from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/schedule", label: "Schedule" },
  { href: "/register", label: "Register" },
  { href: "/contact", label: "Contact" }
];

export const stats = [
  { label: "A/B Pass Rate", value: "63%" },
  { label: "Years Teaching", value: "20+" },
  { label: "Students Guided", value: "1,200+" }
];

export const features = [
  {
    title: "Exam-first Teaching",
    description: "Theory, revision, paper practice, and marking schemes aligned to Sri Lankan A/L and O/L standards.",
    icon: GraduationCap
  },
  {
    title: "Mobile Learning",
    description: "Fast pages, downloadable resources, and dashboard access optimized for student phones.",
    icon: BookOpen
  },
  {
    title: "Trusted Support",
    description: "WhatsApp-first communication, parent contact tracking, and clear announcements.",
    icon: ShieldCheck
  }
];

export const upcomingClasses = [
  { title: "2027 A/L Business Studies", type: "Physical", time: "Sunday 10.30 PM", price: "LKR 2,500 / month" },
  { title: "2028 A/L Business Studies", type: "Online", time: "Monday 6.30 PM", price: "LKR 2,500 / month" },
  { title: "Grade 11 Commerce", type: "Online", time: "Friday 8.30 PM", price: "LKR 1,000 / month" }
];

export const schedules = [
  { subject: "Business Studies", batch: "2027 Theory", mode: "Physical", day: "Sunday", time: "10.30 AM - 1.00 PM", fee: "LKR 2,500" },
  { subject: "Commerce Online", batch: "Grade 11", mode: "Online", day: "Friday", time: "8.30 PM - 10.30 PM", fee: "LKR 1,000" },
  { subject: "Commerce Physical", batch: "Grade 11", mode: "Physical", day: "Sunday", time: "5.00 PM - 7.00 PM", fee: "LKR 1,000" },
  { subject: "Business Studies", batch: "2028 Theory", mode: "Online", day: "Monday", time: "6.30 PM - 9.30 PM", fee: "LKR 2,500" },
  { subject: "Commerce 1", batch: "Grade 10", mode: "Online", day: "Saturday", time: "8.00 PM - 10.00 PM", fee: "LKR 1,000" },
  { subject: "Commerce 2", batch: "Grade 10", mode: "Physical", day: "Saturday", time: "2.00 PM - 4.00 PM", fee: "LKR 1,000" }
];



export const achievementCards = [
  { title: "A/B Passes", value: "63%", icon: Users },
  { title: "Seminars", value: "120+", icon: CalendarDays },
  { title: "Support Channel", value: "24/7", icon: MessageCircle }
];

export const faqs = [
  { q: "Can I join online?", a: "Yes. Online classes and downloadable resources are designed for students across Sri Lanka." },
  { q: "Do parents receive updates?", a: "The registration form collects parent contact details for notices, payment updates, and urgent class changes." }
];
