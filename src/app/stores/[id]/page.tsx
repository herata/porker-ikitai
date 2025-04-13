import { StoreDetails } from "@/components/store/StoreDetails";
import { Button } from "@/components/ui/button";
import { getStoreById } from "@/lib/data/storeService";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Remove custom interface and use built-in Next.js types
export default async function StorePage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	// Using async function to properly handle dynamic route parameters
	const { id } = await params;
	const store = await getStoreById(id);

	// If store not found, show 404
	if (!store) {
		notFound();
	}

	return (
		<div className="container mx-auto px-4 py-6 md:py-8">
			<div className="mb-6">
				<Link href="/stores">
					<Button variant="ghost" size="sm" className="text-gray-600">
						<ArrowLeft className="h-4 w-4 mr-2" />
						店舗一覧に戻る
					</Button>
				</Link>
			</div>

			<StoreDetails store={store} />

			<div className="mt-8 pb-4">
				<Button asChild variant="outline" className="w-full md:w-auto">
					<Link
						href={`https://www.google.com/maps/search/${encodeURIComponent(store.name)}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						Googleマップで見る
					</Link>
				</Button>
			</div>
		</div>
	);
}
