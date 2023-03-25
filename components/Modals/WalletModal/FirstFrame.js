import React from 'react';
import CrossIcon from '../../icons/CrossIcon';
import CreditCardIcon from '../../../components/Icons/CreditCardIcon';
import AppleLogoIcon from '../../../components/Icons/AppleLogoIcon';
import PayPalIcon from '../../../components/Icons/PayPalIcon';

const FirstFrame = ({ setShowModal, translate, setTranslate }) => {
	return (
		<div
			className={`w-full h-full absolute top-0 left-0 transition duration-300 ${
				translate ? '-translate-x-full' : 'translate-x-0'
			}`}
		>
			{/* Modal Header */}
			<div className="w-full h-[67px] bg-[#F6F6F6] flex items-center justify-between px-8">
				<p className="text-base font-bold">Fund Wallet</p>
				<div
					className="w-8 h-8 bg-white rounded flex justify-center items-center cursor-pointer hover:opacity-80"
					style={{ border: '1px solid #DCDCE4' }}
					onClick={() => setShowModal(false)}
				>
					<CrossIcon />
				</div>
			</div>
			{/* Main Modal content */}
			<div className="w-full  flex flex-col items-center">
				<h2 className="font-bold text-[18px] mt-10 mb-8">
					Choose your preferred means of funding wallet
				</h2>
				<div className="h-max w-[29rem] flex flex-col gap-6">
					<label className="w-full h-[60px] rounded-2xl bg-[#F5F5F5] flex justify-between items-center cursor-pointer">
						<div className="flex items-center gap-4 ml-4 ">
							<CreditCardIcon />
							<p className="font-semibold text-sm">Debit card</p>
						</div>
						<div className="radio-btn mr-[22px]">
							<input type="radio" name="payment-options" />
							<span className="checkmark"></span>
						</div>
					</label>

					<label className="w-full h-[60px] rounded-2xl bg-[#F5F5F5] flex justify-between items-center cursor-pointer">
						<div className="flex items-center gap-4 ml-4 ">
							<AppleLogoIcon />
							<p className="font-semibold text-sm">Apple Pay</p>
						</div>
						<div className="radio-btn mr-[22px]">
							<input type="radio" name="payment-options" />
							<span className="checkmark"></span>
						</div>
					</label>

					<label className="w-full h-[60px] rounded-2xl bg-[#F5F5F5] flex justify-between items-center cursor-pointer">
						<div className="flex items-center gap-4 ml-4 ">
							<PayPalIcon />
							<p className="font-semibold text-sm">PayPal</p>
						</div>
						<div className="radio-btn mr-[22px]">
							<input type="radio" name="payment-options" />
							<span className="checkmark"></span>
						</div>
					</label>
				</div>
			</div>

			{/* Modal Bottom */}
			<div className="w-full h-[67px] bg-[#F6F6F6] absolute bottom-0 left-0 flex items-center justify-between px-8">
				<div
					className="w-[86px] h-9 bg-white rounded flex items-center justify-center cursor-pointer"
					style={{ border: '0.5px solid #333333' }}
					onClick={() => setShowModal(false)}
				>
					<span className="text-xs font-bold">Cancel</span>
				</div>

				<div
					className="w-[94px] h-9 bg-[#8003CD] rounded flex items-center justify-center cursor-pointer"
					style={{ border: '0.5px solid #333333' }}
					onClick={() => setTranslate(true)}
				>
					<span className="text-xs font-bold text-white">Proceed</span>
				</div>
			</div>
		</div>
	);
};

export default FirstFrame;
