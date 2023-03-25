import React from 'react';

import ProgressBar from '@ramonak/react-progress-bar';

const ProgressBars = ({ completed, baseBgColor, bgColor }) => {
	return (
		<ProgressBar
			completed={completed}
			className="wrapper"
			height="8px"
			baseBgColor={baseBgColor}
			bgColor={bgColor}
			labelClassName="label"
		/>
	);
};

export default ProgressBars;
