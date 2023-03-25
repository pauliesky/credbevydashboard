import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import TableMobile from '../../components/TableMobile';
import { LoanRequestTable } from '../../components/LoanRequestTable';

const LoanRequest = () => {
	return (
		<div className="flex justify-start items-start">
			<div className="sidebar hidden xl:flex">
				<Sidebar />
			</div>
			<div className="main-page">
				<div className="flex flex-col items-start justify-start">
					<Navbar />

					<main className="px-4 md:px-5 py-10 md:py-12 w-full">
						<h3 className="heading-title md:mb-16 ">Loan Request</h3>
						<div className="hidden md:block">
							<LoanRequestTable />
						</div>
						<div className="md:hidden">
							<TableMobile />
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default LoanRequest;
