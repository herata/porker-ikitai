import {
	type MapBounds,
	type PokerStore,
	SearchFilters,
	type SearchParams,
	SortOption,
} from "@/types/store";
import { mockStores } from "./mockStores";

// Function to check if a store is currently open
const isStoreOpenNow = (store: PokerStore): boolean => {
	const now = new Date();
	const dayNames = [
		"日曜日",
		"月曜日",
		"火曜日",
		"水曜日",
		"木曜日",
		"金曜日",
		"土曜日",
	];
	const dayOfWeek = dayNames[now.getDay()];

	const daySchedule = store.openingHours.find((oh) => oh.day === dayOfWeek);
	if (!daySchedule || daySchedule.hours === "休業") return false;

	const [startTime, endTime] = daySchedule.hours.split("-");
	const currentHours = now.getHours();
	const currentMinutes = now.getMinutes();

	// Parse start time
	const [startHour, startMinute] = startTime.split(":").map(Number);

	// Parse end time (handling next day notation "翌X:XX")
	let endHour = 0;
	let endMinute = 0;
	let isNextDay = false;

	if (endTime.includes("翌")) {
		isNextDay = true;
		const [hours, minutes] = endTime.replace("翌", "").split(":").map(Number);
		endHour = hours;
		endMinute = minutes || 0;
	} else {
		[endHour, endMinute] = endTime.split(":").map(Number);
	}

	// Convert to minutes since midnight for easier comparison
	const currentTimeInMinutes = currentHours * 60 + currentMinutes;
	const startTimeInMinutes = startHour * 60 + startMinute;
	let endTimeInMinutes = endHour * 60 + endMinute;

	if (isNextDay) {
		endTimeInMinutes += 24 * 60; // Add a full day worth of minutes
	}

	return (
		currentTimeInMinutes >= startTimeInMinutes &&
		currentTimeInMinutes <= endTimeInMinutes
	);
};

// Function to check if a store is within map bounds
const isStoreInBounds = (store: PokerStore, bounds: MapBounds): boolean => {
	return (
		store.location.lat <= bounds.ne.lat &&
		store.location.lat >= bounds.sw.lat &&
		store.location.lng <= bounds.ne.lng &&
		store.location.lng >= bounds.sw.lng
	);
};

// Function to search stores based on the provided parameters
export const searchStores = (params?: SearchParams): PokerStore[] => {
	let filteredStores = [...mockStores];

	// Apply filters if available
	if (params) {
		// Filter by location query if provided
		if (params.location) {
			const locationQuery = params.location.toLowerCase();
			filteredStores = filteredStores.filter(
				(store) =>
					store.address.toLowerCase().includes(locationQuery) ||
					store.name.toLowerCase().includes(locationQuery),
			);
		}

		// Filter by map bounds if provided
		if (params.mapBounds) {
			filteredStores = filteredStores.filter((store) =>
				params.mapBounds && isStoreInBounds(store, params.mapBounds),
			);
		}

		// Apply additional filters
		if (params.filters) {
			// Filter by open now status
			if (params.filters.openNow) {
				filteredStores = filteredStores.filter((store) =>
					isStoreOpenNow(store),
				);
			}

			// Filter by chip price range
			if (params.filters.chipPrice) {
				const [minPrice, maxPrice] = params.filters.chipPrice;
				filteredStores = filteredStores.filter(
					(store) =>
						store.pricing.chipPrice >= minPrice &&
						store.pricing.chipPrice <= maxPrice,
				);
			}
		}

		// Apply sorting
		if (params.sortBy) {
			switch (params.sortBy) {
				case "chipPrice":
					filteredStores.sort(
						(a, b) => a.pricing.chipPrice - b.pricing.chipPrice,
					);
					break;
				case "rating":
					filteredStores.sort((a, b) => (b.rating || 0) - (a.rating || 0));
					break;
				// For 'distance', we would need user's location, but for mock data, we'll just leave it as-is
				default:
					break;
			}
		}
	}

	return filteredStores;
};

// Function to get a specific store by ID - updated to be async to match Next.js page requirements
export async function getStoreById(
	id: string,
): Promise<PokerStore | undefined> {
	// For demonstration purposes, adding a small delay to simulate fetching from an API
	await new Promise((resolve) => setTimeout(resolve, 50));

	return mockStores.find((store) => store.id === id);
}
