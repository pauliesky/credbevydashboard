import Image from 'next/image';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import DownloadIcon from '../../components/icons/DownloadIcon';
import CloseCircleIcon from '../../components/icons/CloseCircleIcon';
import TickCircleIcon from '../../components/icons/TickCircleIcon';
import UserInfoTabs from '../../components/Tabs';
import UserInfoMobile from '../../components/UserInfoMobile';
import KycHeaderMobile from '../../components/KycHeaderMobile';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import CreditScore from '../../components/CreditScore';

const UserPage = () => {
	return (
		<div className="flex justify-start items-start">
			<div className="sidebar hidden xl:flex">
				<Sidebar />
			</div>
			<div className="main-page">
				<div className="flex flex-col items-start justify-start">
					<Navbar />

					<main className="px-4 sm:px-7 py-0 sm:py-12 w-full">
						<div className="flex flex-col justify-start items-start gap-7 w-full">
							<KycHeaderMobile />
							<div className="user--credit__score hidden sm:block">
								<Card>
									<div className="w-full h-full p-6">
										<div className="flex justify-between items-center">
											<div className="flex justify-start items-center gap-12 mt-6">
												<div className="flex flex-col justify-start items-start gap-4">
													<div className="rounded-full">
														<Image
															alt="user"
															src="/img/user-lg.png"
															width={82}
															height={82}
														/>
													</div>
													<p className="fullname">Oripeloye Timilehin John</p>
												</div>
												<div className="flex flex-col justify-start items-start gap-4">
													<p className="biodata">31 Years Old (Male)</p>
													<p className="biodata">
														Timilehinoripeloye@gmail.com
													</p>
													<p className="biodata">+2349055380387</p>
													<p className="biodata">
														10, Lawani Street, Abule Oja, Yaba, Lagos
													</p>
												</div>
											</div>
											<div className="flex flex-col mr-52">
												<CreditScore />
												<div className="flex justify-between w-full px-8">
													<span>400</span>
													<span>800</span>
												</div>
											</div>
										</div>
									</div>
								</Card>
							</div>
							<div className="hidden sm:flex justify-center items-center gap-5 ml-auto">
								<Button
									icon={<DownloadIcon width={24} height={24} color="#8A8B9F" />}
									label="Download Request"
									bgcolor="#fff"
									borders={true}
									width="auto"
								/>
								<Button
									icon={<CloseCircleIcon width={24} height={24} color="#fff" />}
									label="Decline Request"
									bgcolor="#FA4D56"
									borders={false}
									width="auto"
								/>
								<Button
									icon={<TickCircleIcon width={24} height={24} color="#fff" />}
									label="Accept Request"
									bgcolor="#42BE65"
									borders={false}
									width="auto"
								/>
							</div>

							<div className="user--kyc__info hidden sm:block">
								<Card>
									<div className="w-full h-full hidden sm:block overflow-hidden">
										<UserInfoTabs />
									</div>
								</Card>
							</div>
							<div className="w-full h-full sm:hidden overflow-hidden">
								<UserInfoMobile />
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default UserPage;
