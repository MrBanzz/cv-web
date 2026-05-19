I'll explore the project to understand the current state of the CV form and preview panel.
Now I understand the current state. Let me create the implementation plan.

## Goal
Implement a live CV preview panel that renders real-time form data with modern dark glassmorphism styling on the `/dashboard/cv/new` page.

## Context
- **Current state**: Form at `/dashboard/cv/new` collects fullName, email, phone, location, LinkedIn, summary, experiences, educations, and skills. Preview section shows only a placeholder.
- **Form file**: `src/app/dashboard/cv/new/page.tsx` - already has all state and handlers
- **Styling**: Uses shadcn/ui with Tailwind CSS; dark mode uses CSS variables in `src/app/globals.css`
- **Requirements**: No backend, no testing setup, keep implementation simple

## Acceptance Criteria
- AC-1: Preview renders full name prominently as CV header
  - File: create `src/components/dashboard/cv-preview.tsx`, import in page.tsx
  - Verification: Type in form, see name update in preview immediately
- AC-2: Preview renders contact info (email, phone, location, LinkedIn) below name
  - Icons for each field using lucide-react
  - LinkedIn should be clickable if valid URL
- AC-3: Preview renders summary section when filled
  - Show section header "Summary" with content below
- AC-4: Preview renders experience list with company, position, dates, description
  - Show company + position as title, date range as subtitle
  - Show description as body text
  - Filter out empty entries
- AC-5: Preview renders education list with institution, degree, field, year
  - Show institution as title, degree + field as subtitle
  - Filter out empty entries
- AC-6: Preview renders skills list as styled badges/chips
  - Show skill name with proficiency indicator (color-coded)
  - Filter out empty entries
- AC-7: Preview uses dark glassmorphism styling
  - Semi-transparent dark background with backdrop-blur
  - Subtle border with glow effect
- AC-8: Preview is responsive
  - Adjusts layout for mobile/tablet/desktop viewports
  - Sticky positioning on desktop

## Implementation Notes
- Create `src/components/dashboard/cv-preview.tsx` component
- Pass form state as props to the preview component
- Use lucide-react icons (Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, User)
- Glassmorphism CSS: `bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20`
- Skills proficiency colors: Beginner (gray), Intermediate (blue), Advanced (green), Expert (purple)
- Date formatting: convert YYYY-MM to "MMM YYYY" format (e.g., "2023-01" → "Jan 2023")
- Empty state: show placeholder text when no data entered for a section
- Main verification command: `npm run dev` → navigate to `/dashboard/cv/new` → fill form → verify preview updates

## Out of Scope
- PDF export functionality
- CV templates/themes selection
- Image upload for profile photo
- Backend storage or API calls
- Print styling