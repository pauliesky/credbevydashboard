import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Button from '../../components/UI/Button';

const LoanProducts = () => {
	return (
		<div className="flex justify-start items-start">
			<div className="sidebar hidden xl:flex">
				<Sidebar />
			</div>
			<div className="main-page">
				<div className="flex flex-col items-start justify-start">
					<Navbar />

					<main className="px-5 py-12 w-full">
						<h3 className="heading-title ml-2">Loan Products</h3>
						<div className="flex justify-center items-center w-full h-full loan-products_svgicon">
							<div className="flex flex-col items-center">
								<Image
									src="/img/amigos-standing.jpg"
									width={349}
									height={322}
									alt="Amigos Standing"
								/>
								<span
									className="mt-2 mb-8 text-sm font-bold"
									style={{ color: '#8A8B9F' }}
								>
									You haven't added any loan product yet
								</span>
								<Link href="loan-products/add-product">
									<div>
										<Button
											label="Add New Product"
											bgcolor="#8003CD"
											borders={false}
											width="134px"
										/>
									</div>
								</Link>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default LoanProducts;
