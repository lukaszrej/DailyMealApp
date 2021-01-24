import { Pie } from 'react-chartjs-2';
import { Props } from './index.types';

export const PieChart = (props: Props) => {
	const { label, chartData } = props;

	return (
		<div className='chart'>
			<Pie
				data={chartData}
				options={{
					title: {
						display: true,
						fontSize: 25,
						text: label
					},
					legend: {
						display: true,
						position: 'bottom'
					}
				}}
			/>
		</div>
	);
};
