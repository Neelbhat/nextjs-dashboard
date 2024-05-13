import BottomBar from '@/components/bottomBar'
import Navbar from './navbar'
import LineCharts from '@/components/lineCharts'

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="px-10">
				<BottomBar />
				<LineCharts />
			</div>
		</>
	)
}
