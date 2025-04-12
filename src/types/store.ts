/**
 * Type definitions for poker stores and related data
 */

export interface Location {
	lat: number;
	lng: number;
}

export interface OpeningHours {
	day: string; // e.g., "Monday", "Tuesday", etc.
	hours: string; // e.g., "12:00-22:00"
}

export interface Pricing {
	entryFee?: number; // Optional entrance fee in yen
	chipPrice: number; // Price per chip in yen
	withdrawalFee?: number; // Optional fee for withdrawing chips
}

export interface Rules {
	hasAnte: boolean; // Whether the game has an ante
	rake: string; // Description of the rake, e.g., "5% (max ¥500)"
}

export interface Events {
	hasTournaments: boolean;
	tournamentDetails?: string; // Optional details about tournaments
}

export interface PokerStore {
	id: string;
	name: string;
	address: string;
	location: Location;
	openingHours: OpeningHours[];
	pricing: Pricing;
	rules: Rules;
	events: Events;
	googleMapsPlaceId: string;
	rating?: number; // Optional Google rating
	photoUrl?: string; // Optional store photo URL
}

export type SortOption = "chipPrice" | "rating" | "distance";

export interface SearchFilters {
	openNow: boolean;
	chipPrice: [number, number] | null;
}

export interface MapBounds {
	ne: Location;
	sw: Location;
}

export interface SearchParams {
	query?: string;
	location?: string;
	mapBounds?: MapBounds;
	filters?: SearchFilters;
	sortBy?: SortOption;
}
