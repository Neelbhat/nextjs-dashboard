'use client'

import React from 'react'

import { LineChart } from '@mui/x-charts/LineChart'
import { Line } from 'react-chartjs-2'
import PieChartComp from './pieChart'
import TableComp from './table'

const LineCharts = () => {
	const data = {
		labels: ['0.00', '4.00', '8.00', '12.00', '16.00', '20.00', '23.59'],
		datasets: [
			{
				labels: 'Sales of the Week',
				data: [3.5, 3.9, 4.1, 4.2, 4.5, 4.25, 3.75],
				backgroundColor: 'blue',
				borderColor: 'blue',
				pointBorderColor: 'blue',
			},
		],
	}
	const options = {
		plugins: {
			legend: true,
		},
		scales: {
			y: {
				min: 3,
				max: 6,
			},
		},
	}

	return (
		<div>
			<div className="flex gap-6">
				<div className="flex flex-col gap-8 w-1/2 h-screen justify-between">
					<div className="border border-gray-200 rounded-md border-solid h-96 ml-11">
						<p className="px-6 py-2 font-medium">Income</p>
						<div className="mx-4">
							<Line data={data} options={options}></Line>
						</div>
					</div>
					<div className="border border-gray-200 rounded-md border-solid h-96 ml-11">
						<p className="m-4 mb-0 font-medium">Income from government initiative</p>
						<LineChart
							xAxis={[{ data: [1, 2, 3, 6, 8, 10], data: [7, 6.5, 5, 4, 3, 2, 1] }]}
							series={[
								{ curve: 'linear', data: [4.2, 5.4, 6, 4.3, 4, 3.5, 2] },
								{ curve: 'linear', data: [4.5, 5, 5.4, 4, 5, 4.5, 4] },
							]}
							height={300}
							margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
							grid={{ vertical: true, horizontal: true }}
						/>
					</div>
				</div>
				<div className="border border-gray-200 rounded-xl w-1/2 h-screen">
					<PieChartComp />
					<TableComp />
				</div>
			</div>
		</div>
	)
}

export default LineCharts
