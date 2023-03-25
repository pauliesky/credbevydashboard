import React from 'react';

const StepOne = () => {
	return (
		<div className="flex flex-col my-6 ml-6 step__one--wrapper">
			<div className="flex flex-col sm:flex-row gap-5">
				<div className="flex flex-col gap-1">
					<label htmlFor="product-name" className="text-sm font-bold">
						Product Name
					</label>
					<div className="input__wrapper">
						<input
							type="text"
							name="product name"
							placeholder="Kai"
							id="product-name"
							className="w-full"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="amount" className="text-sm font-bold">
						Amount
					</label>
					<div className="input__wrapper">
						<input
							type="text"
							name="amount"
							id="amount"
							className="w-full"
							placeholder="Kai"
						/>
					</div>
				</div>
			</div>

			<div className="flex flex-col sm:flex-row gap-5">
				<div className="flex flex-col gap-1">
					<label htmlFor="duration" className="text-sm font-bold">
						Duration
					</label>
					<div className="input__wrapper">
						<input
							type="text"
							name="duration"
							placeholder="kai.doe@gmail.com"
							id="duration"
							className="w-full"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="interest-rate" className="text-sm font-bold">
						Interest Rate
					</label>
					<div className="input__wrapper">
						<input
							type="text"
							name="interest rate"
							placeholder="kai.doe@gmail.com"
							id="interest-rate"
							className="w-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepOne;
