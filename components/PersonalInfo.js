import React from 'react';

const PersonalInfo = () => {
	return (
		<div className="w-full h-full">
			<div className="flex justify-start items-start gap-10 mt-12 pl-6">
				<div className="flex flex-col items-start justify-start gap-6">
					<span className="biodata--label">First Name</span>
					<span className="biodata--label">Last Name</span>
					<span className="biodata--label">Phone Number</span>
					<span className="biodata--label">Email</span>
					<span className="biodata--label">Date of Birth</span>
					<span className="biodata--label">Education</span>
					<span className="biodata--label">Marital Status</span>
				</div>
				<div className="flex flex-col items-start justify-start gap-6">
					<span className="biodata--label__value">Oripeloye</span>
					<span className="biodata--label__value">Timilehin</span>
					<span className="biodata--label__value">+2349055380387</span>
					<span className="biodata--label__value">
						Timilehinoripeloye@gmail.com
					</span>
					<span className="biodata--label__value">
						16th December 1991 (31 yrs old)
					</span>
					<span className="biodata--label__value">
						Bachelor of Science (B.Sc)
					</span>
					<span className="biodata--label__value">Single</span>
				</div>
			</div>
		</div>
	);
};

export default PersonalInfo;
