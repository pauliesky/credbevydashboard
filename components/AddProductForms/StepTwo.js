import React from 'react';

const StepTwo = () => {
	return (
		<div className="flex flex-col gap-5" style={{ margin: '26px' }}>
			<label htmlFor="requirement1" className="checkbox">
				<input
					className="checkbox__input"
					type="checkbox"
					name="requirement one"
					id="requirement1"
				/>
				<div className="checkbox__box"></div>
				<span className="label__text">Requirement 1</span>
			</label>

			<label htmlFor="requirement2" className="checkbox">
				<input
					className="checkbox__input"
					type="checkbox"
					name="requirement two"
					id="requirement2"
				/>
				<div className="checkbox__box"></div>
				<span className="label__text">Requirement 2</span>
			</label>

			<label htmlFor="requirement3" className="checkbox">
				<input
					className="checkbox__input"
					type="checkbox"
					name="requirement three"
					id="requirement3"
				/>
				<div className="checkbox__box"></div>
				<span className="label__text">Requirement 3</span>
			</label>

			<label htmlFor="requirement4" className="checkbox">
				<input
					className="checkbox__input"
					type="checkbox"
					name="requirement four"
					id="requirement4"
				/>
				<div className="checkbox__box"></div>
				<span className="label__text">Requirement 4</span>
			</label>

			<label htmlFor="requirement5" className="checkbox">
				<input
					className="checkbox__input"
					type="checkbox"
					name="requirement five"
					id="requirement5"
				/>
				<div className="checkbox__box"></div>
				<span className="label__text">Requirement 5</span>
			</label>
		</div>
	);
};

export default StepTwo;
