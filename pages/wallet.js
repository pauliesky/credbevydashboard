import React from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/UI/Card';
import WalletTabs from '../components/WalletTabs';

const Wallet = () => {
	return (
		<div className="flex justify-start items-start">
			<div className="sidebar hidden xl:flex">
				<Sidebar />
			</div>
			<div className="main-page">
				<div className="flex flex-col items-start justify-start">
					<Navbar />

					<main className="px-5 py-12 w-full">
						<h3 className="heading-title mb-12 ml-2">Wallet</h3>
						<Banner />
						<h3 className="text-lg font-bold mt-4 mb-5">
							Recent Wallet Activities
						</h3>
						<div className="w-full h-[31.42rem]">
							<Card>
								<WalletTabs />
							</Card>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default Wallet;
