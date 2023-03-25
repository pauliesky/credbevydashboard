const BankInfo = () => {
	return (
		<div className="w-full h-full">
			<div className="flex justify-start items-start gap-10 mt-12 pl-6">
				<div className="flex flex-col items-start justify-start gap-6">
					<span className="biodata--label">Bank Name</span>
					<span className="biodata--label">Account Name</span>
					<span className="biodata--label">Phone Number</span>
					<span className="biodata--label">BVN</span>
				</div>
				<div className="flex flex-col items-start justify-start gap-6">
					<span className="biodata--label__value">
						Guarantee Trust Bank (GTB)
					</span>
					<span className="biodata--label__value">
						Oripeloye Timilehin John
					</span>
					<span className="biodata--label__value">+2349055380387</span>
					<span className="biodata--label__value">22763839373</span>
				</div>
			</div>
		</div>
	);
};

export default BankInfo;
