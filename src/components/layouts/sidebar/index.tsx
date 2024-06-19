import { Menu } from "lucide-react"

export const Sidebar = () => {
	return (
		<div className="">
			<div className="fixed top-2 right-2">
				<Menu className="text-text-primary transition duration-300 ease-in-out cursor-pointer hover:text-text-secondary" />
			</div>
		</div>
	)
}
