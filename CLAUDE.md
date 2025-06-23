# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
npm run dev

# Build for production (static export)
npm run build

# Lint code
npm run lint

# Start production server
npm run start
```

## Architecture Overview

### Next.js App Router with Static Export
- **Static Site**: Configured with `output: "export"` for static hosting
- **App Router**: Uses Next.js 14 App Router with TypeScript
- **Two-tier Layout**: Root layout (server) → ClientLayout (client) → page content

### Component Architecture
- **UI Library**: shadcn/ui components with Radix UI primitives
- **Layout Components**: Header (Mac-style window controls), Navbar (terminal-style), Particle (canvas animation)
- **Theme System**: Custom Context with localStorage persistence using data attributes (`data-theme`)

### Styling System
- **Tailwind CSS**: With custom "ash" color palette (50-950 scale)
- **CSS Variables**: Theme-aware colors defined in `globals.css`
- **Font**: JetBrains Mono throughout for terminal aesthetic

### Data Flow
- **Static Data**: Projects and content stored in `lib/data.ts`
- **Dynamic Routes**: `projects/[slug]` uses `generateStaticParams`
- **Client State**: Window dragging, fullscreen mode, theme switching

### Key Features
- **Desktop Interface**: Draggable window with fullscreen toggle
- **Keyboard Navigation**: h/a/p/e shortcuts for nav
- **Particle Background**: Canvas-based animation system
- **Mobile Responsive**: Adaptive layouts for mobile/desktop

## Important Patterns

### Theme Usage
Always use CSS custom properties from the theme system:
```css
/* Use theme variables */
bg-primary text-accent border-muted

/* Not hardcoded colors */
bg-gray-900 text-white border-gray-700
```

### Component Creation
- Use existing shadcn/ui components before creating custom ones
- Follow the forwardRef pattern for UI components
- Maintain accessibility with proper ARIA labels

### Performance Considerations
- Static generation requires no server dependencies
- Particle system uses requestAnimationFrame for smooth animation
- Image optimization is disabled for static deployment compatibility

### File Organization
- `app/`: Pages and layouts (App Router)
- `components/ui/`: Reusable UI components
- `components/layout/`: Layout-specific components  
- `lib/data.ts`: Static content and project data
- `contexts/`: React contexts for global state