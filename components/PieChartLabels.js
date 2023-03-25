import React from 'react';

const PieChartLabels = () => {
	return (
		<div className="flex justify-center items-center gap-6">
			<div className="flex justify-center items-center gap-2">
				<div className="piechart--label__color-completed" />
				<span className="piechart--label__desc">Completed</span>
			</div>
			<div className="flex justify-center items-center gap-2">
				<div className="piechart--label__color-active" />
				<span className="piechart--label__desc">Active</span>
			</div>
			<div className="flex justify-center items-center gap-2">
				<div className="piechart--label__color-overdue" />
				<span className="piechart--label__desc">Overdue</span>
			</div>
		</div>
	);
};

export default PieChartLabels;
