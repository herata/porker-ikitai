import type { PokerStore } from "@/types/store";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardTitle } from "../ui/card";

interface StoreCardProps {
	store: PokerStore;
}

export function StoreCard({ store }: StoreCardProps) {
	return (
		<Link href={`/stores/${store.id}`} className="block hover:no-underline">
			<Card className="h-full hover:shadow-md transition-shadow">
				<div className="relative w-full pt-[60%]">
					<Image
						src={
							store.photoUrl ||
							"https://images.unsplash.com/photo-1606167668584-78701c57f13d"
						}
						alt={store.name}
						fill
						className="object-cover rounded-t-lg"
						priority={false}
					/>
				</div>

				<CardContent className="p-4">
					<div className="flex justify-between items-start mb-2">
						<CardTitle className="text-lg">{store.name}</CardTitle>

						{store.rating && (
							<div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
								<StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
								<span className="text-sm font-bold">
									{store.rating.toFixed(1)}
								</span>
							</div>
						)}
					</div>

					<p className="text-sm text-gray-600 mb-3 line-clamp-2">
						{store.address}
					</p>

					<div className="flex flex-wrap gap-2 mb-2">
						<Badge variant="outline" className="text-xs">
							チップ {store.pricing.chipPrice}円
						</Badge>

						{store.rules.hasAnte ? (
							<Badge variant="outline" className="text-xs">
								アンティ有り
							</Badge>
						) : (
							<Badge variant="outline" className="text-xs">
								アンティ無し
							</Badge>
						)}

						{store.events.hasTournaments && (
							<Badge variant="secondary" className="text-xs">
								トーナメント有り
							</Badge>
						)}
					</div>

					<div className="text-xs text-gray-500 mt-2">
						{isOpenNow(store) ? (
							<span className="text-green-600 font-semibold">営業中</span>
						) : (
							<span>本日: {getTodayHours(store)}</span>
						)}
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}

// Helper function to check if a store is currently open
function isOpenNow(store: PokerStore): boolean {
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

	// For simplicity in the UI component, we'll just check if the store has hours for today
	// A more accurate check would parse the hours and compare with current time
	return daySchedule.hours !== "休業";
}

// Helper function to get today's hours
function getTodayHours(store: PokerStore): string {
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
	return daySchedule ? daySchedule.hours : "休業";
}
