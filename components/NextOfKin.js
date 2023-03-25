const NextOfKin = () => {
	return (
		<div className="w-full h-full">
			<div className="flex justify-start items-start gap-10 mt-12 pl-6">
				<div className="flex flex-col items-start justify-start gap-6">
					<span className="biodata--label">First Name</span>
					<span className="biodata--label">Last Name</span>
					<span className="biodata--label">Phone Number</span>
					<span className="biodata--label">Relationship</span>
				</div>
				<div className="flex flex-col items-start justify-start gap-6">
					<span className="biodata--label__value">Oripeloye</span>
					<span className="biodata--label__value">Timilehin</span>
					<span className="biodata--label__value">+2349055380387</span>
					<span className="biodata--label__value">Brother</span>
				</div>
			</div>
		</div>
	);
};

export default NextOfKin;
