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

## Development Workflow
1. Local development with `npm run dev`
2. Linting with `npm run fix`
3. Preview with `npm run preview`
4. Deployment with `npm run deploy`

## Environment Setup
- Node.js 20+ (using .node-version)
- Google Maps API key required for local development (to be implemented)
- Cloudflare account for deployment