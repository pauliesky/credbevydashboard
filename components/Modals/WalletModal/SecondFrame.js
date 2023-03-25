import React from 'react';
import ArrowBackIcon from '../../Icons/ArrowBackIcon';
import CrossIcon from '../../icons/CrossIcon';
import ArrowDownIcon from '../../icons/ArrowDownIcon';
import AddIcon from '../../Icons/AddIcon';

const SecondFrame = ({ setShowModal, translate, setTranslate }) => {
	return (
		<div
			className={`w-full h-full relative transition duration-300 ${
				translate ? 'translate-x-0' : 'translate-x-[51.8125rem]'
			}`}
		>
			{/* Modal Header */}
			<div className="w-full h-[67px] bg-[#F6F6F6] flex items-center justify-between px-8">
				<div
					className="cursor-pointer px-1"
					onClick={() => setTranslate(false)}
				>
					<ArrowBackIcon />
				</div>
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
				<h2 className="font-bold text-[18px] mt-10 mb-8">Debit Card</h2>
				<div className="h-max w-[29rem] flex flex-col gap-6">
					<div className="w-full h-[60px] rounded-2xl bg-[#F5F5F5] flex items-center">
						<p className="text-sm font-semibold ml-4">Amount</p>
					</div>
					<div className="w-full h-[60px] rounded-2xl bg-[#F5F5F5] flex justify-between items-center cursor-pointer">
						<p className="text-sm font-semibold ml-4">Choose Debit Card</p>
						<div className="px-4">
							<ArrowDownIcon color={'#292D32'} />
						</div>
					</div>
					<div className="flex items-center self-start gap-2 mt-1 cursor-pointer">
						<AddIcon width={24} height={24} color={'#8003CD'} strokeWidth={1} />
						<p className="text-sm font-semibold text-[#8003CD]">
							Add New Debit Card
						</p>
					</div>
				</div>
			</div>

			{/* Modal bottom */}
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
					onClick={() => {}}
				>
					<span className="text-xs font-bold text-white">Proceed</span>
				</div>
			</div>
		</div>
	);
};

export default SecondFrame;
