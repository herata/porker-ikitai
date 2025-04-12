import type { SearchFilters, SortOption } from "@/types/store";
import { FilterIcon, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import { Slider } from "../ui/slider";
import { Switch } from "../ui/switch";

interface StoreFiltersProps {
	initialLocation?: string;
	initialFilters?: SearchFilters;
	initialSort?: SortOption;
	onSearch: (
		location: string,
		filters: SearchFilters,
		sortBy: SortOption,
	) => void;
}

export function StoreFilters({
	initialLocation = "",
	initialFilters = { openNow: false, chipPrice: [100, 2000] },
	initialSort = "chipPrice",
	onSearch,
}: StoreFiltersProps) {
	const [location, setLocation] = useState(initialLocation);
	const [filters, setFilters] = useState<SearchFilters>(initialFilters);
	const [sortBy, setSortBy] = useState<SortOption>(initialSort);

	const handleSearch = () => {
		onSearch(location, filters, sortBy);
	};

	const handleClear = () => {
		setLocation("");
		setFilters({ openNow: false, chipPrice: [100, 2000] });
		setSortBy("chipPrice");
	};

	return (
		<div className="bg-white p-4 rounded-lg shadow-sm border mb-4">
			<div className="flex flex-col md:flex-row gap-3 mb-4">
				<div className="flex-1">
					<div className="relative">
						<Input
							placeholder="地域・店舗名で検索"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							className="pl-9"
						/>
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
					</div>
				</div>

				<div className="md:w-48">
					<Select
						value={sortBy}
						onValueChange={(value) => setSortBy(value as SortOption)}
					>
						<SelectTrigger>
							<SelectValue placeholder="並び替え" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="chipPrice">チップ安い順</SelectItem>
							<SelectItem value="rating">評価高い順</SelectItem>
							<SelectItem value="distance">距離順</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="hidden md:block">
					<Button variant="default" onClick={handleSearch}>
						検索
					</Button>
				</div>
			</div>

			<div className="md:flex items-center justify-between">
				<div className="flex items-center gap-4 mb-4 md:mb-0">
					<div className="flex items-center space-x-2">
						<Switch
							id="open-now"
							checked={filters.openNow}
							onCheckedChange={(checked) =>
								setFilters({ ...filters, openNow: checked })
							}
						/>
						<label htmlFor="open-now" className="text-sm">
							営業中のみ
						</label>
					</div>

					<div className="hidden md:block">
						<p className="text-sm mb-1">
							チップ料金: {filters.chipPrice?.[0] ?? 0}円 - {filters.chipPrice?.[1] ?? 0}円
						</p>
						<div className="px-2">
							<Slider
								min={100}
								max={2000}
								step={100}
								value={filters.chipPrice ?? [100, 2000]}
								onValueChange={(value) =>
									setFilters({
										...filters,
										chipPrice: value as [number, number],
									})
								}
								className="w-[200px]"
							/>
						</div>
					</div>
				</div>

				<div className="md:hidden flex justify-between">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline" size="sm">
								<FilterIcon className="h-4 w-4 mr-2" />
								絞り込み
							</Button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>絞り込み条件</SheetTitle>
							</SheetHeader>

							<div className="mt-6 space-y-6">
								<div className="space-y-4">
									<h3 className="font-medium">チップ料金</h3>
									<p className="text-sm">
										{filters.chipPrice ? `${filters.chipPrice[0]}円 - ${filters.chipPrice[1]}円` : "未設定"}
									</p>
									<Slider
										min={100}
										max={2000}
										step={100}
										value={filters.chipPrice ?? [100, 2000]}
										onValueChange={(value) =>
											setFilters({
												...filters,
												chipPrice: value as [number, number],
											})
										}
									/>
								</div>

								<div className="flex justify-end gap-2 pt-4">
									<SheetClose asChild>
										<Button onClick={handleSearch} variant="default">
											適用する
										</Button>
									</SheetClose>
								</div>
							</div>
						</SheetContent>
					</Sheet>

					<Button variant="default" size="sm" onClick={handleSearch}>
						検索
					</Button>
				</div>

				<div className="hidden md:block">
					<Button
						variant="ghost"
						size="sm"
						onClick={handleClear}
						className="text-gray-500"
					>
						<X className="h-4 w-4 mr-1" />
						条件クリア
					</Button>
				</div>
			</div>
		</div>
	);
}
