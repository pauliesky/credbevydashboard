import React from 'react';
import Portal from '../Portals/portal';

const Modal = ({ onClose, children }) => {
	return (
		<Portal>
			<div className="fixed top-0 left-0 w-full h-[100vmax]">
				<div className="modal-overlay" onClick={onClose} />
			</div>
			<div className="modal">{children}</div>
		</Portal>
	);
};

export default Modal;
