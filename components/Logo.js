import React from 'react';
import LogoIcon from './Icons/LogoIcon';

export default function Logo() {
	return (
		<div className="flex justify-start items-center gap-2">
			<LogoIcon />
			<h2 className="logo-text__primary font-bold">
				CRED<span className="logo-text">BEVY</span>
			</h2>
		</div>
	);
}
