import React from 'react';
import Image from 'next/image';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Integrations = () => {
	return (
		<div className="flex justify-start items-start">
			<div className="sidebar hidden xl:flex">
				<Sidebar />
			</div>
			<div className="main-page">
				<div className="flex flex-col items-start justify-start">
					<Navbar />

					<main className="px-5 py-12 w-full">
						<div className="ml-2">
							<h3 className="heading-title mb-6">Integrations</h3>
							<p className="font-semibold text-sm text-[#8A8B9F]">
								Make life easier for your company by adding any of these
								integrations
							</p>
						</div>
						<div className="w-full h-full pt-[47px]">
							<div className="text-center">
								<Image src="/img/high-five.png" width={311} height={429} />
								<p className="font-bold text-sm text-[#8A8B9F]">
									You do not have any integrations yet!
								</p>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default Integrations;
