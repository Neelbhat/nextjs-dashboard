import React from 'react'

const BottomBar = () => {
	return (
		<div>
			<div className="p-8 m-3 flex space-x-24">
				<div className="bg-blue-500 h-24 w-96 rounded-md text-white p-2">
					Total patients
					<div className="p-2 text-4xl font-semibold">1,134</div>
				</div>
				<div className="bg-blue-900 h-24 w-96 rounded-md  text-white p-2">
					Total income
					<div className="p-2 text-4xl font-semibold">$17,14,334</div>
				</div>
				<div className="bg-yellow-500 h-24 w-96 rounded-md  text-black p-2">
					Births & Deaths
					<div className="p-2 text-4xl font-semibold flex">
						14
						<div className="text-gray-500 text-sm p-3">Births</div>4<div className="text-gray-500 text-sm p-3">Deaths</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BottomBar
