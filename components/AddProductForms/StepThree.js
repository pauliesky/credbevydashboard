import React from 'react';
import CategoryVariantIcon from '../icons/CategoryVariantIcon';

const StepThree = () => {
	return (
		<div className="flex flex-col sm:flex-row gap-5 m-6">
			<div className="flex flex-col gap-1">
				<label htmlFor="percentage-discount" className="text-sm font-bold">
					How many percentage discount?
				</label>
				<div className="input__wrapper">
					<input
						type="text"
						name="percentage discount"
						placeholder="10%"
						id="percentage-discount"
						className="w-full"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="discount-duration" className="text-sm font-bold">
					Duration of discount?
				</label>
				<div className="input__wrapper">
					<input
						type="text"
						name="duration of discount"
						id="discount-duration"
						className="w-full"
						placeholder="Get a calendar that allows you pick a duration"
					/>
					<CategoryVariantIcon />
				</div>
			</div>
		</div>
	);
};

export default StepThree;
