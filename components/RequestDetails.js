import React from 'react';

const RequestDetails = () => {
	return (
		<div className="w-full h-full">
			<div className="flex justify-start items-start gap-10 mt-12 pl-6">
				<div className="flex flex-col items-start justify-start gap-6">
					<span className="biodata--label">Product type</span>
					<span className="biodata--label">Amount</span>
					<span className="biodata--label">Monthly Payment</span>
					<span className="biodata--label">Interest Rate</span>
					<span className="biodata--label">Duration</span>
				</div>
				<div className="flex flex-col items-start justify-start gap-6">
					<span className="biodata--label__value">Silver</span>
					<span className="biodata--label__value">#130,000</span>
					<span className="biodata--label__value">#20,000</span>
					<span className="biodata--label__value">12%</span>
					<span className="biodata--label__value">4 months</span>
				</div>
			</div>
		</div>
	);
};

export default RequestDetails;
