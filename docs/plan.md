I'll explore the codebase to understand the existing dashboard layout, styling approach, and routing patterns before creating the plan.
Let me explore directly using Glob and Grep.
Let me search more specifically in the src directory.

Now I have a complete understanding of the project. Let me create the implementation plan.

---

## Goal
Build a CV builder page at `/dashboard/cv/new` with a responsive split layout containing a form editor (personal info, experience, education, skills) and a live preview placeholder, using the existing dark glassmorphism dashboard styling.

## Context
- **Framework**: Next.js with App Router
- **Styling**: Tailwind CSS with shadcn/ui components, dark theme (`bg-[#0a0a0a]`), glassmorphism effects (radial gradients, backdrop-blur)
- **Available UI Components**: Button, Input, Card, Label, Avatar
- **Routing Pattern**: `src/app/dashboard/cv/new/page.tsx`
- **Icon Library**: lucide-react

## Acceptance Criteria
- AC-1: Page accessible at `/dashboard/cv/new` with proper layout inherited from dashboard layout.
  - Sub-bullets: Uses `src/app/dashboard/layout.tsx` parent structure; no additional wrapper needed.
- AC-2: Responsive split layout with form on left (or top on mobile), preview on right (or bottom on mobile).
  - Sub-bullets: Use CSS grid/flex with `flex-col lg:flex-row`; breakpoint at `lg` (1024px).
- AC-3: Personal info form section with fields: full name, email, phone, location, LinkedIn URL, summary/objective.
  - Sub-bullets: Use existing Input and Label components from `src/components/ui/`.
- AC-4: Experience section with add/remove capability for multiple entries (company, position, start date, end date, description).
  - Sub-bullets: Use Button with variant "outline" for add; use Button with variant "ghost" and icon for remove.
- AC-5: Education section with add/remove capability for multiple entries (institution, degree, field of study, graduation year).
- AC-6: Skills section with add/remove capability for multiple skills (skill name, proficiency level).
- AC-7: Live preview placeholder on the right side showing a static visual representation.
  - Sub-bullets: Card component with gray/muted background to indicate placeholder area.
- AC-8: Dark glassmorphism styling consistent with dashboard aesthetic.
  - Sub-bullets: Use existing `bg-card`, `border-border`, `text-muted-foreground` classes; maintain radial gradient background from layout.

## Implementation Notes
- **File creation**: Create `src/app/dashboard/cv/new/page.tsx` as the main page component.
- **Component structure**: Keep all sections in one file for simplicity (per "minimal" requirement).
- **State management**: Use React `useState` for form data and dynamic lists (experience, education, skills).
- **Styling approach**: Reuse existing dark theme classes from globals.css; no custom CSS needed.
- **Sequencing**: 
  1. Create page file with responsive split layout structure
  2. Add form sections (personal info, experience, education, skills)
  3. Add preview placeholder
  4. Wire up state management for dynamic sections
- **Verification**: Navigate to `/dashboard/cv/new` in browser; verify layout, form fields, and dark theme styling.

## Out of Scope
- No backend/API integration
- No actual live preview rendering (placeholder only)
- No form validation
- No testing setup
- No data persistence