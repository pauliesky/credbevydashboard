import Card from './UI/Card';
import UserIcon from './icons/UserIcon';
import ActivityIcon from './icons/ActivityIcon';
import NairaIcon from './icons/NairaIcon';
import ArrowUpIcon from './icons/ArrowUpIcon';

const Widgets = () => {
	return (
		<div className="flex flex-col sm:flex-row justify-start items-start gap-6 sm:mr-2 lg:mr-0 sm:gap-3">
			<div className="flex-auto w-full">
				<Card>
					<div className="dashboard--widgets">
						<div className="icon rounded-full p-2 w-8 h-8">
							<UserIcon />
						</div>
						<span className="dashboard--widgets__desc">
							Total Loan Approved
						</span>
						<div className="flex justify-between items-center w-full">
							<span className="dashboard--widgets__number">200,000</span>
							<div className="flex justify-start items-center gap-1 py-1 px-2 ml-auto stats-wrapper">
								<ArrowUpIcon />{' '}
								<span className="dashboard--widgets__stats">5, 18%</span>
							</div>
						</div>
					</div>
				</Card>
			</div>

			<div className="flex-auto w-full mr-2 sm:mr-0">
				<Card>
					<div className="dashboard--widgets">
						<div className="icon rounded-full p-2 w-8 h-8">
							<ActivityIcon />
						</div>
						<span className="dashboard--widgets__desc">Total Loan Overdue</span>
						<div className="flex justify-between items-center w-full">
							<span className="dashboard--widgets__number">172</span>
							<div className="flex justify-start items-center gap-1 py-1 px-2 ml-auto stats-wrapper">
								<ArrowUpIcon />{' '}
								<span className="dashboard--widgets__stats">5, 18%</span>
							</div>
						</div>
					</div>
				</Card>
			</div>

			<div className="flex-auto w-full mr-2 sm:mr-0">
				<Card>
					<div className="dashboard--widgets">
						<div className="icon rounded-full p-2 w-8 h-8 flex justify-center items-center">
							<NairaIcon />
						</div>
						<span className="dashboard--widgets__desc">
							Total Amount Disbursed
						</span>
						<div className="flex justify-between items-center w-full">
							<div className="dashboard--widgets__number flex justify-center items-center gap-1">
								<span className="naira">₦</span>
								<span>20,000,000</span>
							</div>
							<div className="flex justify-start items-center gap-1 py-1 px-2   ml-auto stats-wrapper">
								<ArrowUpIcon />
								<span className="dashboard--widgets__stats">5, 18%</span>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Widgets;
