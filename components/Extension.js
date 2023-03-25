import React from 'react';

export default function Extension({ icon, ext }) {
	return (
		<div className="flex justify-start items-center gap-1">
			<span>{icon}</span>
			<span>{ext}</span>
		</div>
	);
}
