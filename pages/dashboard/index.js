import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import Widgets from '../../components/Widgets';
import ConversionRate from '../../components/ConversionRate';
import Banner from '../../components/Banner';
import LoanIncome from '../../components/LoanIncome';
import BottomCharts from '../../components/BottomCharts';

const Dashboard = () => {
	return (
		<div className="flex justify-start items-start">
			<div className="sidebar hidden xl:flex">
				<Sidebar />
			</div>
			<div className="main-page">
				<div className="flex flex-col items-start justify-start">
					<Navbar />
					<main className="px-2 sm:px-5 py-12 w-full">
						<h3 className="heading-title mb-12 ">Dashboard</h3>
						<Banner />
						<Widgets />

						{/* The Loan Income Chart and Conversion Rate */}
						<div className="flex flex-col sm:flex-row justify-start gap-4 mt-7">
							<LoanIncome />
							<ConversionRate />
						</div>

						{/* Overall progress , LoanTypes and Demography*/}
						<BottomCharts />
					</main>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
