import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-gray-50 border-t mt-auto">
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="font-bold text-lg mb-4">Poker Ikitai</h3>
						<p className="text-sm text-gray-600">
							アミューズメントポーカー店舗の情報サイト。全国のポーカー店舗の料金体系や営業時間、レビューを簡単に検索・閲覧できます。
						</p>
					</div>

					<div>
						<h3 className="font-semibold mb-4">リンク</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="text-sm hover:text-primary transition-colors"
								>
									ホーム
								</Link>
							</li>
							<li>
								<Link
									href="/stores"
									className="text-sm hover:text-primary transition-colors"
								>
									店舗一覧
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">情報</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/about"
									className="text-sm hover:text-primary transition-colors"
								>
									サイトについて
								</Link>
							</li>
							<li>
								<Link
									href="/privacy"
									className="text-sm hover:text-primary transition-colors"
								>
									プライバシーポリシー
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-sm hover:text-primary transition-colors"
								>
									お問い合わせ
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t mt-8 pt-4">
					<p className="text-center text-xs text-gray-500">
						© {new Date().getFullYear()} Poker Ikitai. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
