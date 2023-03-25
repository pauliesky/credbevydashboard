import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import InfoCircleIcon from '../../components/icons/InfoCircleIcon';
import Card from '../../components/UI/Card';
import StepOne from '../../components/AddProductForms/StepOne';
import StepThree from '../../components/AddProductForms/StepThree';
import StepTwo from '../../components/AddProductForms/StepTwo';

const AddProduct = () => {
	return (
		<div className="flex justify-start items-start">
			<div className="sidebar hidden xl:flex">
				<Sidebar />
			</div>
			<div className="main-page">
				<div className="flex flex-col items-start justify-start">
					<Navbar />

					<main className="px-5 py-12 w-full">
						<h3 className="heading-title mb-3 ml-2">Loan Products</h3>
						<div
							className="flex justify-start ml-2 items-center"
							style={{ gap: '5.33px', marginBottom: '22px' }}
						>
							<span
								className="text-sm font-semibold"
								style={{ color: ' #8A8B9F' }}
							>
								Fill in the details below to add a loan product
							</span>
							<InfoCircleIcon width={16} height={16} color="#8A8B9F" />
						</div>

						{/* Forms */}
						<div className="ml-2 add-product_forms">
							<div style={{ height: 'max-content', width: '100%' }}>
								<Card>
									<div className="w-full h-full">
										<div className="add-product_forms-head">
											<span className="add-product_forms-title">
												Product Info
											</span>
											<span className="add-product_forms-steps">1/3</span>
										</div>
										<StepOne />
									</div>
								</Card>
							</div>
							<div style={{ height: 'max-content', width: '100%' }}>
								<Card>
									<div className="w-full h-full">
										<div className="add-product_forms-head">
											<span className="add-product_forms-title">
												Clear Loan Requirements
											</span>
											<span className="add-product_forms-steps">2/3</span>
										</div>
										<StepTwo />
									</div>
								</Card>
							</div>
							<div style={{ height: 'max-content', width: '100%' }}>
								<Card>
									<div className="w-full h-full">
										<div className="add-product_forms-head">
											<span className="add-product_forms-title">Discount</span>
											<span className="add-product_forms-steps">3/3</span>
										</div>
										<StepThree />
									</div>
								</Card>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
