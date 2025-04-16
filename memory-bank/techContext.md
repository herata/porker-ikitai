# Technical Context: Poker Ikitai

## Frontend Stack
- **Framework**: Next.js 15 with React 19 and TypeScript
- **Styling**: Tailwind CSS v4 with Shadcn UI components
- **Linting/Formatting**: Biome
- **State Management**: React Hooks (useState, useCallback, useEffect)
- **Image Handling**: Next.js Image component with remote patterns configuration

## Backend & APIs
- **Current**: Mock data service for initial MVP
  - Simulated async behavior in store service
  - Type-safe interfaces for all data structures
- **Future**: AWS Lambda functions for API endpoints
- **External API**: Google Maps JavaScript API (planned for integration)

## Deployment
- **Hosting**: Cloudflare Pages
- **Build Tool**: OpenNext for Cloudflare Pages compatibility
- **Image Configuration**: Remote patterns for Unsplash image hosting
- **Runtime Configuration**: 
  - Runtime configuration has been simplified in the project
  - Using `export const runtime = 'edge'` at the global level in next.config.ts
  - Empty OpenNext configuration file to avoid compatibility issues
  - Dynamic routes use Promise-based params typing for maximum compatibility
- **Deployment Considerations**:
  - TypeScript types for dynamic routes in Next.js 15 require special handling
  - Using Promise-based params typing: `params: Promise<{ id: string }>`
  - Auto-generated Next.js types can cause conflicts during build
  - Runtime configurations must be properly aligned between Next.js and OpenNext

## Data Structure
```typescript
// Core data structures have been implemented

// Main store interface
export interface PokerStore {
  id: string;
  name: string;
  address: string;
  location: Location; // { lat: number; lng: number }
  openingHours: OpeningHours[];
  pricing: Pricing;
  rules: Rules;
  events: Events;
  googleMapsPlaceId: string;
  rating?: number;
  photoUrl?: string;
}

// Search related interfaces
export type SortOption = 'chipPrice' | 'rating' | 'distance';

export interface SearchFilters {
  openNow: boolean;
  chipPrice: [number, number] | null;
}

export interface SearchParams {
  query?: string;
  location?: string;
  mapBounds?: MapBounds;
  filters?: SearchFilters;
  sortBy?: SortOption;
}
```

## React Patterns
- **useCallback** for stable function references
- **Dependency arrays** properly maintained in useEffect hooks
- **Async/await** pattern in Next.js dynamic route components
- **Client-side components** marked with "use client" directive where needed

## Next.js 15 TypeScript Patterns
- **Dynamic Routes**: Using Promise-based params typing for maximum compatibility:
  ```typescript
  export default async function StorePage({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
    const { id } = await params;
    // Component implementation
  }
  ```
- **Remote Patterns**: Configured in next.config.ts for external image sources:
  ```typescript
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  ```
- **Global Runtime Configuration**: Set at the Next.js config level:
  ```typescript
  // next.config.ts
  const nextConfig: NextConfig = {
    runtime: "edge",
    // Other configurations...
  };
  ```

## Development Workflow
1. Local development with `npm run dev`
2. Linting with `npm run fix`
3. Preview with `npm run preview`
4. Deployment with `npm run deploy`

## Environment Setup
- Node.js 20+ (using .node-version)
- Google Maps API key required for local development (to be implemented)
- Cloudflare account for deployment