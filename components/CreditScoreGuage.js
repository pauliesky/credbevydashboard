import GaugeChart from 'react-gauge-chart';

export default function CreditScoreGuage() {
	const uv = 120;
	return (
		<div>
			<GaugeChart
				id="arc-gauge"
				nrOfLevels={4}
				arcsLength={[uv / 150, uv / 300, uv / 300, uv / 200]}
				colors={['#FB6969', '#5C00FE', '#8003CD', '#8003CD']}
				percent={uv / 20}
				arcPadding={0.06}
				cornerRadius={45}
				arcWidth={0.1}
				marginInPercent={0.05}
				needleColor="transparent"
				needleBaseColor="transparent"
				// hideText
				textColor="#000000"
				formatTextValue={(value) => value}
			/>
		</div>
	);
}
