# MScom.lk

Production-ready full-stack tuition platform for A/L Commerce and Business Studies classes in Sri Lanka.

## Stack

- Next.js 15, TypeScript, Tailwind CSS
- Supabase Auth, PostgreSQL, Row Level Security, Storage
- Vercel deployment-ready configuration
- Mobile-first public website, student dashboard, and admin dashboard

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Fill these values:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
NEXT_PUBLIC_WHATSAPP_NUMBER=94770000000
```

4. Apply the Supabase migration in `supabase/migrations/20260604000000_initial_mscom_schema.sql`.

5. Start the app:

```bash
npm run dev
```

## Admin Setup

Create a normal student account first, then promote it in Supabase SQL:

```sql
update public.users
set role = 'admin'
where email = 'admin@example.com';
```

## Features

- Public pages: Home, About, Class Schedule, Results, Registration, Contact
- Auth: signup, login, password reset, session refresh
- Student dashboard: profile, registered classes, announcements, resources, seminar notices, LMS placeholders
- Admin dashboard: registrations, CSV export, announcements, class schedules, resources, testimonials, analytics overview
- Supabase RLS policies and Storage buckets
- SEO metadata, OpenGraph, sitemap, robots

## Deployment

Deploy on Vercel and configure the same environment variables in the Vercel project settings. The included `vercel.json` uses the standard Next.js build.
