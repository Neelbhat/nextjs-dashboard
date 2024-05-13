import React from 'react'

const TableComp = () => {
	return (
		<div className="px-6">
			<div>
				<form action="#">
					<div className="my-4">
						<label htmlFor="Selected" className="text-gray-400">
							Selected :
						</label>
						<select name="Selected" id="Selected" className="font-semibold">
							<option value="IPD">IPD</option>
							<option value="IPD">CPD</option>
							<option value="IPD">BBD</option>
						</select>
					</div>
				</form>
			</div>
			<div className="space-y-2">
				<div className="rounded-md bg-gray-200 py-2">
					<p className="font-semibold text-center">IPD Total Income : ₹ 5,23,459</p>
				</div>
				<div className="rounded-md bg-gray-100 py-2 flex justify-between items-center px-10">
					<p>Cash</p>
					<p className="font-semibold">₹ 5,23,459</p>
				</div>
				<div>
					<div className="rounded-t-md bg-gray-100 py-2 flex justify-between items-center px-10">
						<p>TPA/Cashless</p>
						<p className="font-semibold">₹ 3,00,009</p>
					</div>
					<div>
						<div className="border-2 border-gray-200 flex">
							<div className="min-w-32 h-16 text-center py-4">
								<p className="text-xs">Govt Schemes</p>
								<p className="font-medium">₹ 1,00,003</p>
							</div>
							<div className="shadow-inner-right flex overflow-x-scroll custom_scrollbar">
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
							</div>
						</div>
						<div className="border-x-2 border-gray-200 flex">
							<div className="min-w-32 h-16 text-center py-4">
								<p className="text-xs">Govt Schemes</p>
								<p className="font-medium">₹ 1,00,003</p>
							</div>
							<div className="shadow-inner-right flex overflow-x-scroll custom_scrollbar">
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
							</div>
						</div>
						<div className="border-2 rounded-b-md border-gray-200 flex">
							<div className="min-w-32 h-16 text-center py-4">
								<p className="text-xs">Govt Schemes</p>
								<p className="font-medium">₹ 1,00,003</p>
							</div>
							<div className="shadow-inner-right flex overflow-x-scroll custom_scrollbar">
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
								<div className="p-4 min-w-32 h-16 text-center text-gray-500 border-r border-gray-200">
									<p className="text-xs">CGHS</p>
									<p className="font-medium">₹ 30,000</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TableComp
