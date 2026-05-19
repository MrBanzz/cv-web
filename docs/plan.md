Let me explore the existing project structure to understand the setup.
Let me check a few more files to understand existing patterns.

Now I have a clear understanding of the project setup. Let me create the implementation plan.

## Goal

Build a responsive dashboard layout with sidebar navigation, top navbar, user dropdown placeholder, and an empty CV state with a Create CV button - all using dark glassmorphism styling.

## Context

The project is a Next.js 14 application with:
- Tailwind CSS with custom CSS variables for dark/light theming (dark mode is default)
- Existing shadcn-style UI components: Button, Card, Avatar, DropdownMenu, Input, Label
- `lucide-react` for icons
- Glassmorphism background utilities already defined in `tailwind.config.ts`
- Dark theme uses `oklch(0.145 0 0)` background with `oklch(1 0 0 / 10%)` borders
- The auth pages (`/login`, `/register`) already demonstrate the dark glassmorphism aesthetic via `AuthCard`

## Acceptance Criteria

- **AC-1**: Dashboard page is accessible at `/dashboard` route
- **AC-2**: Sidebar navigation displays with: Dashboard (active), My CVs, Templates, Settings icons/links. Hidden on mobile, toggleable via hamburger menu
- **AC-3**: Top navbar displays: Logo/brand text, mobile menu toggle, user avatar with dropdown placeholder (showing user name and "Sign Out" option)
- **AC-4**: Dashboard main content shows empty state with: illustration/icon placeholder, "No CVs yet" message, "Create your first CV" description, prominent "Create CV" button
- **AC-5**: Create CV button is styled as primary call-to-action (gradient/violet accent)
- **AC-6**: Dashboard is fully responsive - sidebar collapses to overlay on mobile, content adjusts padding/layout
- **AC-7**: Dark glassmorphism aesthetic is consistent: semi-transparent cards, subtle borders, radial gradients, proper contrast

## Implementation Notes

**Component Structure:**
1. Create `src/app/dashboard/layout.tsx` - Root dashboard layout with sidebar and navbar
2. Create `src/app/dashboard/page.tsx` - Main dashboard page with empty state
3. Create `src/components/dashboard/sidebar.tsx` - Sidebar navigation component
4. Create `src/components/dashboard/top-navbar.tsx` - Top navbar with user dropdown
5. Create `src/components/dashboard/empty-cv-state.tsx` - Empty state component

**Sidebar Navigation Items:**
- Dashboard (active) - `LayoutDashboard` icon
- My CVs - `FileText` icon
- Templates - `LayoutTemplate` icon
- Settings - `Settings` icon

**Styling Details:**
- Use existing glass utility: `bg-glass` and `border-border/10`
- Dark background: `bg-[#0a0a0a]` or existing `background` variable
- Card backgrounds: `bg-card` with `border-border`
- Primary button: `bg-primary` or custom violet gradient
- Mobile breakpoint: use Tailwind's `md:` and `lg:` prefixes

**Verification Commands:**
- `npm run dev` - Start dev server, navigate to `/dashboard`
- Test responsive: resize browser to mobile width, verify sidebar overlay and hamburger menu
- Verify empty state displays correctly with Create CV button
- Verify glassmorphism effect visible (subtle transparency, borders)

**Key Dependencies:**
- Uses existing `lucide-react` icons
- Uses existing `Button` component
- Uses existing `Avatar` and `DropdownMenu` components
- Uses existing `Card` component

## Out of Scope

- Any actual CV creation/editor functionality
- Authentication state management
- Backend/database integration
- CV preview or export features
- Settings page implementation