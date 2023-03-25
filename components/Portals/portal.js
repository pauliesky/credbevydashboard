import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
	const [mounted, setMounted] = React.useState(false);

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);

	return mounted
		? createPortal(children, document.querySelector('#overlay'))
		: null;
};

export default Portal;
