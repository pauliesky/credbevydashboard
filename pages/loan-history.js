import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const LoanHistory = () => {
	return (
		<div className="flex justify-start items-start">
			<div className="sidebar hidden xl:flex">
				<Sidebar />
			</div>
			<div className="main-page">
				<div className="flex flex-col items-start justify-start">
					<Navbar />

					<main className="px-5 py-12 w-full">
						<h3 className="heading-title mb-12 ml-2">Loan History</h3>
					</main>
				</div>
			</div>
		</div>
	);
};

export default LoanHistory;
