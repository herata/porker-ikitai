"use client";

import { StoreCard } from "@/components/store/StoreCard";
import { StoreFilters } from "@/components/store/StoreFilters";
import { searchStores } from "@/lib/data/storeService";
import type { PokerStore, SearchFilters, SortOption } from "@/types/store";
import { useCallback, useEffect, useState } from "react";

export default function StoresPage() {
	const [stores, setStores] = useState<PokerStore[]>([]);
	const [location, setLocation] = useState("");
	const [filters, setFilters] = useState<SearchFilters>({
		openNow: false,
		chipPrice: [100, 2000],
	});
	const [sortBy, setSortBy] = useState<SortOption>("chipPrice");
	const [isLoading, setIsLoading] = useState(true);

	const handleSearch = useCallback(
		(
			searchLocation: string,
			searchFilters: SearchFilters,
			searchSortBy: SortOption,
		) => {
			setIsLoading(true);
			setLocation(searchLocation);
			setFilters(searchFilters);
			setSortBy(searchSortBy);

			// Simulate API fetch delay
			setTimeout(() => {
				const results = searchStores({
					location: searchLocation,
					filters: searchFilters,
					sortBy: searchSortBy,
				});

				setStores(results);
				setIsLoading(false);
			}, 500);
		},
		[],
	);

	// Use a separate effect for the initial load that only runs once
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		// Initial load with default values
		handleSearch(location, filters, sortBy);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleSearch]);

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">店舗一覧</h1>

			<StoreFilters
				initialLocation={location}
				initialFilters={filters}
				initialSort={sortBy}
				onSearch={handleSearch}
			/>

			{isLoading ? (
				<div className="py-12 text-center">
					<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]">
						<span className="sr-only">読み込み中...</span>
					</div>
					<p className="mt-2 text-gray-500">店舗情報を読み込んでいます...</p>
				</div>
			) : (
				<div>
					<p className="text-sm text-gray-600 mb-4">
						{stores.length}件の店舗が見つかりました
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{stores.map((store) => (
							<StoreCard key={store.id} store={store} />
						))}
					</div>

					{stores.length === 0 && (
						<div className="py-12 text-center">
							<p className="text-gray-500">
								条件に合う店舗が見つかりませんでした。条件を変えて再検索してください。
							</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
