import React, { useState } from 'react';
import FirstFrame from './FirstFrame';
import SecondFrame from './SecondFrame';

const WalletModal = ({ setShowModal }) => {
	const [translate, setTranslate] = useState(false);

	return (
		<div className="w-[51.8125rem] h-[36.8125rem] bg-white rounded-lg z-50 overflow-hidden relative flex">
			<FirstFrame
				setShowModal={setShowModal}
				translate={translate}
				setTranslate={setTranslate}
			/>

			{/* second frame */}
			<SecondFrame
				setShowModal={setShowModal}
				translate={translate}
				setTranslate={setTranslate}
			/>
		</div>
	);
};

export default WalletModal;
