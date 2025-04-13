# Active Context: Poker Ikitai

## Current Focus
- Refining and fixing the core functionality of the implemented MVP
- Enhancing React hooks implementation with proper dependency handling
- Ensuring proper NextJS App Router implementation with async/await patterns
- Preparing for Google Maps integration
- Fixing TypeScript errors for successful deployment to Cloudflare Pages

## Recent Changes
- Created core components (Header, Footer, StoreCard, StoreFilters, StoreDetails)
- Implemented all main pages (Home, Store listings, Store details)
- Fixed Next.js image configuration for Unsplash images
- Fixed React Hook dependency warnings in store listing page
- Updated store detail page to use async pattern with dynamic routes
- Fixed TypeScript interface for dynamic route page props to match Next.js 15 requirements

## Next Steps
1. Implement Google Maps integration for store locations
2. Add Google Maps API for reviews and ratings display
3. Enhance search functionality with more filter options
4. Optimize performance for production deployment
5. Set up proper error boundaries and loading states

## Active Decisions
- Using mock data for initial development before implementing backend APIs
- Following mobile-first design principles with Shadcn UI components
- Using useCallback for stable function references in React components
- Implementing proper async/await patterns with Next.js App Router
- Using Next.js Image component with proper remote pattern configuration
- Using the standard Next.js 15 PageProps interface for dynamic route pages:
  ```typescript
  interface PageProps {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }
  ```