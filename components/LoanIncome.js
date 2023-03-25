import React from 'react';
import Chart from './Chart';
import ChevronDownIcon from './icons/ChevronDownIcon';
import Card from './UI/Card';

const LoanIncome = () => {
	return (
		<div className="chart-income">
			<Card>
				<div className="flex justify-between items-start my-5 mx-5">
					<p className="chart-desc">Loan Income</p>
					<div className="chart-desc__button flex justify-center items-center gap-3 cursor-pointer">
						<span className="chart-desc__button--text">This Month</span>
						<ChevronDownIcon />
					</div>
				</div>
				<div className="h-full w-full py-6">
					<Chart />
				</div>
			</Card>
		</div>
	);
};

export default LoanIncome;
