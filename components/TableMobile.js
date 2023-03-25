import Link from 'next/link';
import React from 'react';
import ChevronDownWhite from './Icons/ChevronDownWhite';
import GroupOptionsICon from './Icons/GroupOptionsICon';
import Card from './UI/Card';
import User from './User';

const TableMobile = () => {
	return (
		<div className="flex flex-col w-full">
			<div className="flex justify-between items-center mt-7 w-full">
				<div className="flex justify-center items-center gap-3 md:gap-4">
					<div className="new--request">New Request</div>
					<div className="new--request__number">
						<span>48</span>
						<span>request</span>
					</div>
				</div>

				<div className="table--download flex justify-center items-center gap-2 cursor-pointer">
					<span className="text-xs font-bold">Download</span>
					<ChevronDownWhite />
				</div>
			</div>

			<div className="flex flex-col w-full gap-4 mt-5">
				<div className="w-full mobile--loan__request">
					<Card>
						<div className="flex justify-between items-center px-4 pt-4 mb-6">
							<User username="Oripeloye Timilehin" width={32} height={32} />
							<GroupOptionsICon />
						</div>
						<div className="w-10/12 px-4 mobile--table__entries">
							<div className="flex justify-between items-center mb-3 gap-1">
								<p className="text-xs font-normal">
									Timilehinoripeloye10@gmail.com
								</p>
								<div className="table--amount flex items-center gap-0.5">
									<span className="naira__amount">₦</span>
									<span className="text-xs sm:text-sm mt-px">134,000</span>
								</div>
							</div>
							<div className="flex justify-between items-center mb-3">
								<p className="text-xs font-normal">
									10, Lawani street, abule oja
								</p>
								<span className="mr-3 text-xs">9/27/22</span>
							</div>
							<span
								style={{ color: '#42BE65', marginLeft: '5.25rem' }}
								className="text-sm font-semibold"
							>
								750
							</span>
						</div>
						<div className="flex w-full">
							<Link href="/loan-request/timioripeloye">
								<p
									style={{
										color: '#8003CD',
										fontWeight: 700,
										cursor: 'pointer',
										fontSize: '14px',
									}}
									className="ml-auto mr-4"
								>
									View
								</p>
							</Link>
						</div>
					</Card>
				</div>

				<div className="w-full mobile--loan__request">
					<Card>
						<div className="flex justify-between items-center px-4 pt-4 mb-6">
							<User username="Oripeloye Timilehin" width={32} height={32} />
							<GroupOptionsICon />
						</div>
						<div className="w-10/12 px-4 mobile--table__entries">
							<div className="flex justify-between items-center mb-3 gap-1">
								<p className="text-xs font-normal">
									Timilehinoripeloye10@gmail.com
								</p>
								<div className="table--amount flex items-center gap-0.5">
									<span className="naira__amount">₦</span>
									<span className="text-xs sm:text-sm mt-px">134,000</span>
								</div>
							</div>
							<div className="flex justify-between items-center mb-3">
								<p className="text-xs font-normal">
									10, Lawani street, abule oja
								</p>
								<span className="mr-3 text-xs">9/27/22</span>
							</div>
							<span
								style={{ color: '#42BE65', marginLeft: '5.25rem' }}
								className="text-sm font-semibold"
							>
								750
							</span>
						</div>
						<div className="flex w-full">
							<Link href="/loan-request/timioripeloye">
								<p
									style={{
										color: '#8003CD',
										fontWeight: 700,
										cursor: 'pointer',
										fontSize: '14px',
									}}
									className="ml-auto mr-4"
								>
									View
								</p>
							</Link>
						</div>
					</Card>
				</div>

				<div className="w-full mobile--loan__request">
					<Card>
						<div className="flex justify-between items-center px-4 pt-4 mb-6">
							<User username="Oripeloye Timilehin" width={32} height={32} />
							<GroupOptionsICon />
						</div>
						<div className="w-10/12 px-4 mobile--table__entries">
							<div className="flex justify-between items-center mb-3 gap-1">
								<p className="text-xs font-normal">
									Timilehinoripeloye10@gmail.com
								</p>
								<div className="table--amount flex items-center gap-0.5">
									<span className="naira__amount">₦</span>
									<span className="text-xs sm:text-sm mt-px">134,000</span>
								</div>
							</div>
							<div className="flex justify-between items-center mb-3">
								<p className="text-xs font-normal">
									10, Lawani street, abule oja
								</p>
								<span className="mr-3 text-xs">9/27/22</span>
							</div>
							<span
								style={{ color: '#42BE65', marginLeft: '5.25rem' }}
								className="text-sm font-semibold"
							>
								750
							</span>
						</div>
						<div className="flex w-full">
							<Link href="/loan-request/timioripeloye">
								<p
									style={{
										color: '#8003CD',
										fontWeight: 700,
										cursor: 'pointer',
										fontSize: '14px',
									}}
									className="ml-auto mr-4"
								>
									View
								</p>
							</Link>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default TableMobile;
