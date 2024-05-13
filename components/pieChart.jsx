'use client'

import ReactApexChart from 'react-apexcharts'

const PieChartComp = () => {
	const options = {
		chart: {
			type: 'pie',
		},
		labels: ['OPD', 'IPD', 'TELEMEDICINE', 'PHARMACY', 'RADIOLOGY', 'OTHERS'],
		legend: {
			fontWeight: 400,
			fontSize: '14px',
			fontFamily: 'Helvetica, Arial',
			labels: {
				colors: '#787878',
				useSeriesColors: false,
			},
			position: 'top',
			itemMargin: {
				horizontal: 20,
				vertical: 10,
			},
			markers: {
				radius: 3,
				width: 17,
				height: 17,
				offsetX: -5,
			},
		},
	}
	const series = [44, 55, 13, 43, 22, 32]

	return (
		<div>
			<p className="font-semibold ml-6 mt-4">Source-Wise Income Breakdown</p>
			<div>
				<div id="chart" className="max-h-[350px] overflow-hidden">
					<ReactApexChart options={options} series={series} type="pie" height={350} />
				</div>
				<div id="html-dist"></div>
			</div>
		</div>
	)
}

export default PieChartComp
