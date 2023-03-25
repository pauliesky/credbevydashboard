import Image from 'next/image';
import React from 'react';

const KycHeaderMobile = () => {
	return (
		<div className="w-full h-full sm:hidden">
			<div className="flex flex-col items-start mt-10">
				<div className="flex justify-between items-start gap-4">
					<div className="rounded-full">
						<Image
							src="/img/user-lg.png"
							width={82}
							height={82}
							alt="User photo"
						/>
					</div>

					<div className="flex flex-col justify-start items-start gap-2">
						<p className="fullname text-base font-semibold">
							Oripeloye Timilehin John
						</p>
						<p className="biodata">31 Years Old (Male)</p>
						<p className="biodata">Timilehinoripeloye@gmail.com</p>
						<p className="biodata">+2349055380387</p>
						<p className="biodata">10, Lawani Street, Abule Oja, Yaba, Lagos</p>
					</div>
				</div>
				<div className="self-center mt-10">CREDIT SCORE</div>
			</div>
		</div>
	);
};

export default KycHeaderMobile;
