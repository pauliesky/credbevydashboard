import React from 'react';

export default function TickCircleIcon({ width, height, color }) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.99992 14.6667C11.6666 14.6667 14.6666 11.6667 14.6666 8C14.6666 4.33334 11.6666 1.33334 7.99992 1.33334C4.33325 1.33334 1.33325 4.33334 1.33325 8C1.33325 11.6667 4.33325 14.6667 7.99992 14.6667Z"
				stroke={color}
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.16675 8L7.05341 9.88667L10.8334 6.11333"
				stroke={color}
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
