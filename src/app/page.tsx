import { StoreCard } from "@/components/store/StoreCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { searchStores } from "@/lib/data/storeService";
import { MapPin, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	// Get a few featured stores
	const featuredStores = searchStores().slice(0, 3);

	return (
		<div className="flex flex-col">
			{/* Hero section */}
			<div className="relative bg-primary text-white">
				<div
					className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-90"
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1606167668584-78701c57f13d')",
						backgroundSize: "cover",
						backgroundPosition: "center",
						mixBlendMode: "multiply",
					}}
				/>

				<div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-4">
							アミューズメントポーカーを見つけよう
						</h1>
						<p className="text-lg md:text-xl mb-8 opacity-90">
							全国のアミューズメントポーカー店の情報を簡単に検索・閲覧できるサービス
						</p>

						<div className="bg-white rounded-lg p-1 flex flex-col md:flex-row shadow-lg">
							<div className="relative flex-1 mb-2 md:mb-0">
								<Input
									className="pl-10 w-full border-0 focus-visible:ring-0 py-6 rounded-l-lg"
									placeholder="地域・店舗名で検索..."
								/>
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
							</div>
							<Link href="/stores" className="w-full md:w-auto">
								<Button size="lg" className="w-full md:rounded-l-none">
									検索
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Features section */}
			<div className="container mx-auto px-4 py-12 md:py-16">
				<h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
					Poker Ikitaiの特徴
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<Card className="p-6">
						<div className="flex flex-col items-center text-center">
							<div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
								<Search className="h-6 w-6 text-primary" />
							</div>
							<h3 className="font-semibold text-lg mb-2">簡単検索</h3>
							<p className="text-gray-600 text-sm">
								地域や営業時間、料金システムなど様々な条件で店舗を検索できます
							</p>
						</div>
					</Card>

					<Card className="p-6">
						<div className="flex flex-col items-center text-center">
							<div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
								<MapPin className="h-6 w-6 text-primary" />
							</div>
							<h3 className="font-semibold text-lg mb-2">マップ表示</h3>
							<p className="text-gray-600 text-sm">
								店舗の位置を地図上で確認できるので、最寄りのポーカールームが一目でわかります
							</p>
						</div>
					</Card>

					<Card className="p-6">
						<div className="flex flex-col items-center text-center">
							<div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-primary"
								>
									<title>Heart Icon</title>
									<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
								</svg>
							</div>
							<h3 className="font-semibold text-lg mb-2">詳細情報</h3>
							<p className="text-gray-600 text-sm">
								料金システムやルール、イベント情報など、ポーカー店舗の詳細がすべて分かります
							</p>
						</div>
					</Card>
				</div>
			</div>

			{/* Featured stores section */}
			<div className="bg-gray-50 py-12 md:py-16">
				<div className="container mx-auto px-4">
					<div className="flex justify-between items-center mb-8">
						<h2 className="text-2xl font-bold">おすすめ店舗</h2>
						<Link
							href="/stores"
							className="text-primary font-medium text-sm hover:underline"
						>
							すべての店舗を見る
						</Link>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{featuredStores.map((store) => (
							<StoreCard key={store.id} store={store} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
