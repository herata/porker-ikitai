# Active Context: Poker Ikitai

## Current Focus
- Resolving runtime configuration issues for OpenNext with Cloudflare Pages deployment
- Optimizing type definitions for dynamic routes in Next.js 15
- Preparing for Google Maps integration
- Improving the store detail page user experience
- Stabilizing the build and deployment pipeline

## Recent Changes
- Created core components (Header, Footer, StoreCard, StoreFilters, StoreDetails)
- Implemented all main pages (Home, Store listings, Store details)
- Fixed Next.js image configuration for Unsplash images
- Fixed React Hook dependency warnings in store listing page
- Updated store detail page to use async pattern with dynamic routes
- Simplified runtime configuration approach:
  - Moved from page-level runtime directives to global configuration
  - Set runtime configuration at the Next.js config level
  - Simplified OpenNext configuration to avoid compatibility issues
  - Adjusted TypeScript types for dynamic routes to use Promise-based params
- Removed unnecessary webpack configuration to simplify deployment

## Next Steps
1. Verify successful deployment to Cloudflare Pages with new configuration
2. Implement Google Maps integration for store locations
3. Add Google Maps API for reviews and ratings display
4. Enhance search functionality with more filter options
5. Optimize performance for production deployment
6. Set up proper error boundaries and loading states

## Active Decisions
- Using mock data for initial development before implementing backend APIs
- Following mobile-first design principles with Shadcn UI components
- Using useCallback for stable function references in React components
- Implementing proper async/await patterns with Next.js App Router
- Using Next.js Image component with proper remote pattern configuration
- Using Promise-based params typing for dynamic route parameters: `params: Promise<{ id: string }>`
- Simplifying runtime configuration by setting it globally in next.config.ts:
  ```typescript
  // Global runtime configuration
  const nextConfig: NextConfig = {
    runtime: "edge",
    // Other configurations...
  };
  ```
- Keeping OpenNext configuration minimal to avoid conflicts:
  ```typescript
  // open-next.config.ts
  export default defineCloudflareConfig({
    // Minimal configuration to avoid conflicts
  });
  ```