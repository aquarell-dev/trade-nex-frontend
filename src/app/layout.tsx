import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/layouts/sidebar"
import { cn } from "@/utils/cn"

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
	title: "Trade Nex",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body className={cn(montserrat.className, "bg-background-primary")}>
				<div className="flex">
					<Sidebar />
					{children}
				</div>
			</body>
		</html>
	)
}
