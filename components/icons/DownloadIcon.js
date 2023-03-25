import React from 'react';

export default function DownloadIcon({ width, height, color }) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.96 5.93333C13.36 6.14 14.34 7.37333 14.34 10.0733V10.16C14.34 13.14 13.1467 14.3333 10.1667 14.3333H5.82665C2.84665 14.3333 1.65332 13.14 1.65332 10.16V10.0733C1.65332 7.39333 2.61999 6.16 4.97999 5.94"
				stroke={color}
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8 1.33333V9.92"
				stroke={color}
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.2333 8.43333L7.99994 10.6667L5.7666 8.43333"
				stroke={color}
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
