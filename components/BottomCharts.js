import React from 'react';
import Card from './UI/Card';
import LoanTypes from './LoanTypes';
import OptionsIcon from './icons/OptionsIcon';
import PieCharts from './PieChart';
import PieChartLabels from './PieChartLabels';

const BottomCharts = () => {
	return (
		<div className="flex flex-col sm:flex-row justify-start gap-4 mt-7">
			<div className="chart-progress">
				<Card>
					<div className="flex flex-col items-start gap-6 my-5 mx-5">
						<div className="flex justify-between items-center w-full">
							<p className="conversion-rate__title">Overall Progress</p>
							<span className="self-center cursor-pointer mr-1">
								<OptionsIcon />
							</span>
						</div>
						<div className="chart-wrapper self-center w-full ">
							<PieCharts />
						</div>
					</div>
					<PieChartLabels />
				</Card>
			</div>

			{/* The Loan Progress Bars */}
			<div className="loan-types">
				<Card>
					<div className="flex flex-col items-start gap-10 my-5 mx-5">
						<div className="flex justify-between items-center w-full">
							<p className="conversion-rate__title">Loan Types</p>
							<span className="self-center cursor-pointer mr-1">
								<OptionsIcon />
							</span>
						</div>
						<LoanTypes />
					</div>
				</Card>
			</div>

			{/* The Demography Chart */}
			<div className="demography">
				<Card>
					<div className="flex flex-col items-start gap-10 my-5 mx-5">
						<div className="flex justify-between items-center w-full">
							<p className="conversion-rate__title">Demography</p>
							<span className="self-center cursor-pointer mr-1">
								<OptionsIcon />
							</span>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default BottomCharts;
