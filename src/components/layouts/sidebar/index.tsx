import React from "react"

export const Sidebar = () => {
	return (
		<div className="fixed top-0 left-0 h-screen bg-gray-800 text-white flex flex-col justify-between p-4">
			<div>
				<div className="mb-8">
					<h2 className="text-2xl font-bold">TradeNex</h2>
				</div>
				<div className="flex items-center mb-8">
					<img
						className="w-12 h-12 rounded-full mr-4"
						src="https://via.placeholder.com/150"
						alt="Profile"
					/>
					<div>
						<p className="font-semibold">anyway</p>
						<p className="text-sm text-gray-400">Начинающий</p>
					</div>
				</div>
				<nav>
					<a
						href="#"
						className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
					>
						Вкладка 1
					</a>
					<a
						href="#"
						className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
					>
						Вкладка 2
					</a>
					<a
						href="#"
						className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
					>
						Вкладка 3
					</a>
					<a
						href="#"
						className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
					>
						Вкладка 4
					</a>
				</nav>
			</div>
			<div>
				<a
					href="#"
					className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white mb-4"
				>
					Contact Support
				</a>
				<a
					href="#"
					className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
				>
					Settings
				</a>
			</div>
		</div>
	)
}
