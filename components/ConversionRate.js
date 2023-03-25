import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import OptionsIcon from './icons/OptionsIcon';
import Card from './UI/Card';

const ConversionRate = () => {
	const percentage = 74;

	return (
		<div className="conversion-rate">
			<Card>
				<div className="flex flex-col items-start gap-10 my-5 mx-5">
					<div className="flex justify-between items-center w-full">
						<p className="conversion-rate__title">Conversion Rate</p>
						<span className="self-center cursor-pointer mr-1">
							<OptionsIcon />
						</span>
					</div>
					<div
						className="self-center justify-self-start"
						style={{ width: 194, height: 194 }}
					>
						<CircularProgressbarWithChildren value={percentage}>
							<div
								style={{
									fontSize: 22,
									fontWeight: 700,
								}}
							>
								<div className="progress--text">{`${percentage}%`}</div>
							</div>
						</CircularProgressbarWithChildren>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default ConversionRate;
