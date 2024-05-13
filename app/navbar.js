'use client'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Link from 'next/link'

import { DatePicker, Space } from 'antd'
import dayjs from 'dayjs'

import * as React from 'react'

import {
	Chart as ChartJS,
	LineElement,
	CategoryScale, // x axis
	LinearScale, // y axis
	PointElement,
} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

const rangePresets = [
	{
		label: 'Last 7 Days',
		value: [dayjs().add(-7, 'd'), dayjs()],
	},
	{
		label: 'Last 14 Days',
		value: [dayjs().add(-14, 'd'), dayjs()],
	},
	{
		label: 'Last 30 Days',
		value: [dayjs().add(-30, 'd'), dayjs()],
	},
	{
		label: 'Last 90 Days',
		value: [dayjs().add(-90, 'd'), dayjs()],
	},
]

const Navbar = () => {
	const { RangePicker } = DatePicker

	const onRangeChange = (dates, dateStrings) => {
		if (dates) {
			console.log('From: ', dates[0], ', to: ', dates[1])
			console.log('From: ', dateStrings[0], ', to: ', dateStrings[1])
		} else {
			console.log('Clear')
		}
	}

	return (
		<>
			<div className="px-10 py-3 flex justify-between items-center shadow-lg">
				<div>
					<h3 className="text-sm text-gray-400">Overview</h3>
					<h2 className="font-bold">
						Hospital
						<KeyboardArrowDownIcon />
					</h2>
				</div>
				<div className="text-gray-500 text-sm flex justify-start items-center">
					<p className="uppercase mr-4">Data Range:</p>
					<div className="flex justify-center items-center gap-2">
						<Link
							href="/"
							className="hover:text-white text-gray-600 hover:bg-blue-600 py-1 px-5 rounded-2xl focus:bg-blue-600 focus:text-white"
						>
							Today
						</Link>
						<Link
							href="/"
							className="hover:text-white text-gray-600 hover:bg-blue-600 py-1 px-5 rounded-2xl focus:bg-blue-600 focus:text-white"
						>
							Yesterday
						</Link>
						<Link
							href="/"
							className="hover:text-white text-gray-600 hover:bg-blue-600 py-1 px-5 rounded-2xl focus:bg-blue-600 focus:text-white"
						>
							Week
						</Link>
						<Link
							href="/"
							className="hover:text-white text-gray-600 hover:bg-blue-600 py-1 px-5 rounded-2xl focus:bg-blue-600 focus:text-white"
						>
							Month
						</Link>
						<Link
							href="/"
							className="hover:text-white text-gray-600 hover:bg-blue-600 py-1 px-5 rounded-2xl focus:bg-blue-600 focus:text-white"
						>
							Quarter
						</Link>
						<Link
							href="/"
							className="hover:text-white text-gray-600 hover:bg-blue-600 py-1 px-5 rounded-2xl focus:bg-blue-600 focus:text-white"
						>
							FY 23-24
						</Link>{' '}
						<Link
							href="/"
							className="hover:text-white text-gray-600 hover:bg-blue-600 py-1 px-5 rounded-2xl focus:bg-blue-600 focus:text-white"
						>
							All Time
						</Link>
					</div>
					<div className="text-black ml-16">
						<Space direction="vertical" size={1}>
							<RangePicker
								presets={[
									{
										label: <span aria-label="Current Time to End of Day">Now ~ EOD</span>,
										value: () => [dayjs(), dayjs().endOf('day')],
									},
									...rangePresets,
								]}
								size="middle"
								format="DD MMM YY"
								onChange={onRangeChange}
								style={{ width: '220px' }}
								suffixIcon={<KeyboardArrowDownIcon />}
							/>
						</Space>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
