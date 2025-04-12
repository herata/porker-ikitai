import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";

export function Header() {
	return (
		<header className="border-b sticky top-0 bg-white z-10">
			<div className="container mx-auto px-4 py-3 flex items-center justify-between">
				<Link
					href="/"
					className="text-xl font-bold text-primary flex items-center"
				>
					Poker Ikitai
					<span className="bg-primary text-white text-xs px-1 ml-1 rounded">
						β版
					</span>
				</Link>

				<div className="flex items-center gap-2">
					<nav className="hidden md:flex items-center gap-4">
						<Link
							href="/"
							className="text-sm hover:text-primary transition-colors"
						>
							ホーム
						</Link>
						<Link
							href="/stores"
							className="text-sm hover:text-primary transition-colors"
						>
							店舗一覧
						</Link>
					</nav>

					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline" size="icon" className="md:hidden">
								<Menu className="h-4 w-4" />
								<span className="sr-only">メニュー</span>
							</Button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>メニュー</SheetTitle>
							</SheetHeader>
							<nav className="flex flex-col gap-4 mt-6">
								<Link
									href="/"
									className="text-lg hover:text-primary transition-colors"
								>
									ホーム
								</Link>
								<Link
									href="/stores"
									className="text-lg hover:text-primary transition-colors"
								>
									店舗一覧
								</Link>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
