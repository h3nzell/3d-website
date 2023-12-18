import React, { useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(...registerables);
const SaharaDiagram = () => {
	const [data, setData] = useState({
		datasets: [],
	});

	const [options] = useState({});
	useEffect(() => {
		setData({
			labels: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			],

			datasets: [
				{
					label: "Travel Statistic",
					data: [
						2100, 2330, 1500, 1000, 889, 1567, 965, 282, 478, 500, 453, 1589,
					],
					backgroundColor: "#fff",
					fill: {
						target: "origin",
						above: "rgba(255,255,255,0.10)",
					},

					borderColor: [
						"#32966a",
						"#6a20ff",
						"#8e8c70",
						"#bc6426",
						"#bdef65",
						"#ec2442",
						"#1a5ee1",
						"#73e639",
						"#001f7c",
						"#509d79",
						"#439818",
						"#e24bcd",
					],

					borderWidth: 4,
				},
			],
		});
	}, []);
    
	return (
		<div className='L-diagram-wrapper'>
			<Line data={data} options={options} />
		</div>
	);
};

export default SaharaDiagram;
