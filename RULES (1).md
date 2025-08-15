# Core Principles (Extended from SOLID)

## Single Responsibility Principle (SRP)
- Each React component should have one primary responsibility (e.g., rendering a UI element, managing state, or handling data fetching).
- Keep components under 100 lines; split larger ones into smaller, reusable components.
- Separate data-fetching logic (e.g., API calls) into custom hooks or utility functions.
- Isolate UI logic (e.g., rendering, event handling) from business logic.
- Use descriptive component names that reflect their purpose (e.g., UserProfileCard instead of Card).
- Avoid combining unrelated concerns (e.g., form validation and UI rendering) in a single component.

## Open/Closed Principle (OCP)
- Design components to be extensible via props, slots, or composition without modifying their source code.
- Use component composition over inheritance for flexibility.
- Leverage render props or children to allow customization of component behavior.
- Implement dynamic styling with Tailwind utility classes passed as props.
- Use Next.js dynamic imports or lazy loading for extensible module loading.
- Avoid hardcoding UI elements that may need variation; use configuration or props instead.

## Liskov Substitution Principle (LSP)
- Ensure custom components can replace their base shadcn/ui components without breaking functionality.
- Maintain consistent prop interfaces for similar components (e.g., all buttons should accept onClick and disabled).
- Avoid overriding shadcn/ui component behavior in ways that violate their expected contracts.
- Use TypeScript to enforce prop type compatibility across component hierarchies.
- Prefer composition over extending shadcn/ui components to avoid substitutability issues.

## Interface Segregation Principle (ISP)
- Define narrow, specific prop interfaces for components instead of large, generic ones.
- Split complex components into smaller ones with focused responsibilities (e.g., separate FormInput from Form).
- Use TypeScript interfaces to define clear contracts for component props.
- Avoid passing unused props to components; tailor props to the component's needs.
- Group related props into objects for clarity (e.g., { size: { width, height } } instead of width and height).

## Dependency Inversion Principle (DIP)
- Depend on abstractions (e.g., custom hooks, interfaces) rather than concrete implementations.
- Use dependency injection for services like API clients, passed via props or context.
- Define custom hooks for reusable logic (e.g., useUserData instead of direct API calls).
- Keep components decoupled from specific data sources by using props or context.
- Use Next.js API routes or external services as abstractions for data fetching.

# Frontend-Specific Guidelines (2025 Next.js, shadcn/ui, React, Tailwind CSS) Architectural Best Practices

## Separation of Concerns
- Strictly separate data-fetching logic (use useQuery or custom hooks) from presentation logic (components).
- Example: Use TanStack Query for data fetching and keep components focused on rendering.

## Component Granularity
- Break components into the smallest possible units that are still meaningful (e.g., Button, Input, CardHeader).
- Aim for components that are reusable across pages.

## File Structure
- Organize by feature (e.g., app/features/auth/LoginForm.tsx) rather than type (e.g., components/LoginForm.tsx).
- Use Next.js App Router conventions (app/[feature]/page.tsx).

## Server Components
- Prefer React Server Components (RSC) for data fetching and rendering static content to reduce client-side JavaScript.
- Use Client Components only for interactivity.

## State Management
- Use local state (useState, useReducer) for component-specific state.
- For global state, prefer Zustand or React Context over Redux for simplicity.

## Type Safety
- Use TypeScript for all components, hooks, and utilities.
- Define precise types for props, state, and API responses.

## Performance Optimization
- Use React.memo for components with expensive renders.
- Implement lazy loading with next/dynamic for heavy components.
- Optimize images with Next.js Image component and automatic srcset.
- Minimize re-renders with proper dependency arrays in useEffect and useCallback.

## Accessibility (a11y)
- Ensure all interactive elements have proper ARIA attributes and keyboard navigation.
- Use shadcn/ui components, which are a11y-compliant, and extend them carefully.
- Test with screen readers and tools like Lighthouse.

## SEO
- Leverage Next.js metadata API (export const metadata) for dynamic SEO tags.
- Use server-side rendering (SSR) or static site generation (SSG) for public pages.

# Component Design

## Atomic Design
- Follow an atomic design methodology (atoms, molecules, organisms) for component hierarchy:
  - Atoms: Basic building blocks (e.g., Button, Input) from shadcn/ui.
  - Molecules: Composed atoms (e.g., SearchBar combining Input and Button).
  - Organisms: Complex components (e.g., UserDashboard with multiple molecules).

## Props Design
- Use default props for common cases to reduce boilerplate.
- Pass callbacks (e.g., onSubmit) for event handling instead of internal state.
- Use discriminated unions for variant props (e.g., variant: 'primary' | 'secondary').

## Reusability
- Design components to be context-agnostic (e.g., a Modal component should work for any content, not just a specific form).

## Custom Hooks
- Extract reusable logic into hooks (e.g., useFormValidation, useDebounce).
- Keep hooks focused on a single concern.

## Error Handling
- Use error boundaries for components that may fail (e.g., data-fetching components).
- Display user-friendly error messages with shadcn/ui Alert.

# Styling with Tailwind CSS

## Utility-First
- Use Tailwind's utility classes directly in JSX for styling (e.g., className="bg-blue-500 text-white p-4").

## Consistency
- Follow a consistent naming convention for custom Tailwind classes (e.g., btn-primary, card-shadow).
- Use a predefined design system (colors, spacing, typography) defined in tailwind.config.js.

## Responsive Design
- Use Tailwind's responsive prefixes (e.g., sm:, md:, lg:) for adaptive layouts.
- Test on multiple screen sizes using browser dev tools or Vercel previews.

## Dark Mode
- Support dark mode with dark: prefixes (e.g., dark:bg-gray-800).
- Test both light and dark themes.

## Custom Components
- Extend shadcn/ui components with custom Tailwind styles in components/ui/.
- Use @apply in CSS files only for complex, reusable styles; prefer utility classes otherwise.

## Performance
- Purge unused Tailwind classes in production using purge in tailwind.config.js.
- Avoid inline styles; use Tailwind classes for maintainability.

## Animation
- Use Tailwind's built-in transitions and animations (e.g., transition hover:scale-105).
- For complex animations, use Framer Motion with Tailwind for styling.

# Next.js-Specific Best Practices

## App Router
- Use Next.js 14+ App Router for all routing and server-side features.

## Data Fetching
- Use fetch with Next.js extended caching ({ cache: 'force-cache' }) for static data.
- Use Server Actions for form submissions and mutations.
- Implement incremental static regeneration (ISR) for dynamic pages.

## API Routes
- Define API routes in app/api/ for backend logic, keeping them lightweight.

## Middleware
- Use Next.js middleware (middleware.ts) for authentication, redirects, or locale handling.

## Internationalization (i18n)
- Implement i18n with next-intl or Next.js built-in routing for multi-language support.

## Deployment
- Optimize for Vercel deployment with automatic scaling, domain management, and preview branches.

# shadcn/ui Integration

## Component Usage
- Use shadcn/ui components as the base for UI elements (e.g., Button, Dialog, Table).

## Customization
- Modify shadcn/ui components in components/ui/ to match the design system.
- Use Tailwind to style shadcn/ui components consistently.

## Consistency
- Ensure all shadcn/ui components follow the same design tokens (colors, spacing, typography).

## Extensibility
- Allow consumers to override shadcn/ui component styles via props or className.

# Testing

## Unit Tests
- Write tests for components and hooks using Vitest or Jest with React Testing Library.

## Integration Tests
- Test component interactions (e.g., form submissions) with mocked API responses.

## E2E Tests
- Use Playwright or Cypress for end-to-end testing of critical user flows (e.g., login, checkout).

## Visual Regression
- Use tools like Percy or Chromatic to catch UI regressions.

# Warning Signs

- Components that handle both UI rendering and data fetching.
- Large components (>150 lines) that could be split.
- Hardcoded styles or values that should be configurable via props.
- Overuse of global state for component-specific data.
- Missing TypeScript types for props or state.
- Components tightly coupled to a specific API or data structure.
- Lack of responsive or dark mode support in styling.
- Unoptimized images or heavy client-side JavaScript bundles.

# Implementation Checklist

- Start each component with a clear responsibility and TypeScript interface.
- Use shadcn/ui components as the foundation, customized with Tailwind.
- Extract logic into custom hooks for reusability.
- Test components for accessibility, responsiveness, and dark mode.
- Optimize for performance with lazy loading, memoization, and Next.js features.
- Document component props and usage with Storybook or MDX.
- Deploy to Vercel with CI/CD for automatic previews and testing.
