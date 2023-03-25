import React, { useState } from 'react';
import AddIcon from './Icons/AddIcon';
import BgBlobBottom from './Icons/BgBlobBottom';
import BgBlobBottomMobile from './Icons/BgBlobBottomMobile';
import BgBlobTop from './Icons/BgBlobTop';
import WalletEyeIcon from './Icons/WalletEyeIcon';
import WalletModal from './Modals/WalletModal/WalletModal';
import Modal from './UI/Modal';

const Banner = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className="wallet flex justify-between items-center mt-8 mb-6 w-full relative overflow-hidden z-0">
				<div className="hidden sm:block blob--top">
					<BgBlobTop width={252} height={78} />
				</div>
				<div className="hidden sm:block blob--bottom">
					<BgBlobBottom width={147} height={157} />
				</div>
				<div className="sm:hidden blob--top__mobile">
					<BgBlobTop width={110} height={78} />
				</div>
				<div className="sm:hidden blob--bottom">
					<BgBlobBottomMobile width={94} height={58} />
				</div>
				<div className="wallet--balance flex flex-col gap-2">
					<p className="text-xs sm:text-sm font-bold text-white">
						Wallet Balance
					</p>
					<div className="dashboard--widgets__number flex justify-center items-center gap-1 ">
						<span className="naira--wallet text-white">₦</span>
						<span className="naira--wallet__amount">430,434,684.54</span>
					</div>
					<div className="wallet--btn__add mt-8">
						<button
							type="button"
							className="wallet--btn"
							onClick={() => setShowModal(true)}
						>
							<AddIcon
								width={16}
								height={16}
								color={'#333333'}
								strokeWidth={1.5}
							/>
							<span className="add--money">Fund Wallet</span>
						</button>
					</div>
				</div>
				<div className="z-10 wallet-eye_icon">
					<WalletEyeIcon width={24} height={24} color="#fff" />
				</div>
			</div>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<WalletModal setShowModal={setShowModal} />
				</Modal>
			)}
		</>
	);
};

export default Banner;
