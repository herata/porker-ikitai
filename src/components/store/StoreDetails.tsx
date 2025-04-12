import type { PokerStore } from "@/types/store";
import {
	Activity,
	Calendar,
	Clock,
	Coins,
	MapPin,
	PlusCircle,
	StarIcon,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

interface StoreDetailsProps {
	store: PokerStore;
}

export function StoreDetails({ store }: StoreDetailsProps) {
	return (
		<div className="space-y-6">
			<div className="relative w-full pt-[60%] md:pt-[40%] overflow-hidden rounded-lg">
				<Image
					src={
						store.photoUrl ||
						"https://images.unsplash.com/photo-1606167668584-78701c57f13d"
					}
					alt={store.name}
					fill
					className="object-cover"
					priority
				/>
				{store.rating && (
					<div className="absolute top-4 right-4 flex items-center bg-black/70 text-white px-3 py-1 rounded-full">
						<StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
						<span className="font-bold">{store.rating.toFixed(1)}</span>
					</div>
				)}
			</div>

			<div>
				<h1 className="text-2xl font-bold mb-2">{store.name}</h1>
				<div className="flex items-center text-gray-600 mb-3">
					<MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
					<p className="text-sm">{store.address}</p>
				</div>

				<div className="flex flex-wrap gap-2 mb-4">
					<Badge variant="outline">チップ {store.pricing.chipPrice}円</Badge>

					{store.rules.hasAnte ? (
						<Badge variant="outline">アンティ有り</Badge>
					) : (
						<Badge variant="outline">アンティ無し</Badge>
					)}

					{store.events.hasTournaments && (
						<Badge variant="secondary">トーナメント有り</Badge>
					)}
				</div>
			</div>

			<Card>
				<CardHeader className="pb-2">
					<CardTitle className="flex items-center text-lg">
						<Coins className="h-5 w-5 mr-2 text-primary" />
						料金システム
					</CardTitle>
				</CardHeader>
				<CardContent className="pt-0">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<p className="text-gray-500 text-sm">入場料</p>
							<p className="font-medium">
								{store.pricing.entryFee
									? `${store.pricing.entryFee}円`
									: "無料"}
							</p>
						</div>
						<div>
							<p className="text-gray-500 text-sm">チップ料金</p>
							<p className="font-medium">{store.pricing.chipPrice}円</p>
						</div>
						<div>
							<p className="text-gray-500 text-sm">引き出し手数料</p>
							<p className="font-medium">
								{store.pricing.withdrawalFee
									? `${store.pricing.withdrawalFee}円`
									: "無料"}
							</p>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader className="pb-2">
					<CardTitle className="flex items-center text-lg">
						<Activity className="h-5 w-5 mr-2 text-primary" />
						ルール
					</CardTitle>
				</CardHeader>
				<CardContent className="pt-0">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<p className="text-gray-500 text-sm">アンティ</p>
							<p className="font-medium">
								{store.rules.hasAnte ? "有り" : "無し"}
							</p>
						</div>
						<div>
							<p className="text-gray-500 text-sm">レーキ</p>
							<p className="font-medium">{store.rules.rake}</p>
						</div>
					</div>
				</CardContent>
			</Card>

			{store.events.hasTournaments && (
				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="flex items-center text-lg">
							<Calendar className="h-5 w-5 mr-2 text-primary" />
							トーナメント情報
						</CardTitle>
					</CardHeader>
					<CardContent className="pt-0">
						<p className="text-sm">{store.events.tournamentDetails}</p>
					</CardContent>
				</Card>
			)}

			<Card>
				<CardHeader className="pb-2">
					<CardTitle className="flex items-center text-lg">
						<Clock className="h-5 w-5 mr-2 text-primary" />
						営業時間
					</CardTitle>
				</CardHeader>
				<CardContent className="pt-0">
					<div className="space-y-2">
						{store.openingHours.map((hours, index) => (
							<div key={hours.day} className="flex justify-between text-sm">
								<span className="font-medium">{hours.day}</span>
								<span className={hours.hours === "休業" ? "text-gray-500" : ""}>
									{hours.hours}
								</span>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader className="pb-0">
					<CardTitle className="flex items-center text-lg">
						<MapPin className="h-5 w-5 mr-2 text-primary" />
						アクセス
					</CardTitle>
				</CardHeader>
				<CardContent className="pt-3">
					<div className="h-[300px] bg-gray-100 rounded-md mb-3 overflow-hidden">
						{/* Google Maps would be embedded here when we implement the Google Maps API */}
						<div className="w-full h-full flex items-center justify-center">
							<p className="text-gray-500">地図が表示される予定です</p>
						</div>
					</div>
					<p className="text-sm text-gray-600">{store.address}</p>
				</CardContent>
			</Card>
		</div>
	);
}
