const Location = () => {
	return (
		<div className="w-full h-full">
			<div className="flex justify-start items-start gap-10 mt-12 pl-6">
				<div className="flex flex-col items-start justify-start gap-6">
					<span className="biodata--label">Address</span>
					<span className="biodata--label">State</span>
					<span className="biodata--label">LGA</span>
				</div>
				<div className="flex flex-col items-start justify-start gap-6">
					<span className="biodata--label__value">
						10, Lawani Street, Abule Oja, Yaba, Lagos
					</span>
					<span className="biodata--label__value">Lagos</span>
					<span className="biodata--label__value">Lagos Mainland</span>
				</div>
			</div>
		</div>
	);
};

export default Location;
