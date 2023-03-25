import React from 'react';

export default function WalletEyeIcon({ width, height, color }) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.42004 13.9799 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 20.2702C15.53 20.2702 18.82 18.1902 21.11 14.5902C22.01 13.1802 22.01 10.8102 21.11 9.40021C18.82 5.80021 15.53 3.72021 12 3.72021C8.46997 3.72021 5.17997 5.80021 2.88997 9.40021C1.98997 10.8102 1.98997 13.1802 2.88997 14.5902C5.17997 18.1902 8.46997 20.2702 12 20.2702Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
