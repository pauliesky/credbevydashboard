import React, { useState } from 'react';
import Link from 'next/link';

import { Box, Drawer, IconButton } from '@mui/material';
import { Scrollbars } from 'react-custom-scrollbars';
import MenuOutline from './Icons/MenuOutline';
import { MdClose } from 'react-icons/md';
import CategoryIcon from './Icons/CategoryIcon';
import ShoppingCartIcon from './Icons/ShoppingCartIcon';
import BagIcon from './Icons/BagIcon';
import ChartIcon from './Icons/ChartIcon';
import NotificationIcon from './Icons/NotificationIcon';
import BubbleIcon from './Icons/BubbleIcon';
import SettingsIcon from './Icons/SettingsIcon';
import LoginIcon from './Icons/LoginIcon';
import Logo from './Logo';
import EmptyWalletIcon from './Icons/EmptyWalletIcon';

const SidebarDrawer = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<div>
			<IconButton
				size="medium"
				edge="start"
				color="inherit"
				aria-label="Drawer"
				onClick={() => setIsDrawerOpen(true)}
				className="self-center xl:hidden"
			>
				<MenuOutline className="self-center" />
			</IconButton>

			<Drawer
				anchor="left"
				open={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
			>
				<Box
					p={2}
					mt={4}
					width={{ xs: '320px', sm: '400px' }}
					textAlign="start"
					role="presentation"
				>
					<div className="flex justify-between items-center ml-2">
						<div className="flex justify-center items-center gap-3 lg:gap-1">
							<Logo />
						</div>
						<div
							className="cursor-pointer"
							onClick={() => setIsDrawerOpen(false)}
						>
							<MdClose className="text-2xl" />
						</div>
					</div>
				</Box>
				<Scrollbars autoHide>
					<div className="flex flex-col items-start justify-start">
						<ul className="drawer sidebar--links flex flex-col items-start justify-start gap-9 mt-12">
							{/* Try to refactor this into a single mapped component */}
							<Link href="/dashboard">
								<li className="self-start flex justify-center items-center gap-4">
									<CategoryIcon />
									<span className="ml-2">Dashboard</span>
								</li>
							</Link>

							<Link href="/wallet">
								<li className="self-start flex justify-center items-center gap-4">
									<EmptyWalletIcon />
									<span className="ml-2">Wallet</span>
								</li>
							</Link>

							<Link href="/loan-products">
								<li className="self-start flex justify-center items-center gap-4">
									<ChartIcon />
									<span className="ml-2">Loan Products</span>
								</li>
							</Link>

							<Link href="/loan-request">
								<li className="self-start flex justify-center items-center gap-4">
									<ShoppingCartIcon />
									<span className="ml-2">Loan Request</span>
								</li>
							</Link>

							<Link href="/loan-history">
								<li className="self-start flex justify-center items-center gap-4">
									<BagIcon />
									<span className="ml-2">Loan History</span>
								</li>
							</Link>

							<Link href="/integrations">
								<li className="self-start flex justify-center items-center gap-4">
									<BubbleIcon />
									<span className="ml-2">Integrations</span>
								</li>
							</Link>

							<Link href="/settings">
								<li className="self-start flex justify-center items-start gap-4">
									<SettingsIcon />
									<span className="ml-2">Settings</span>
								</li>
							</Link>

							<Link href="/">
								<div className="self-start flex justify-start items-center gap-4 cursor-pointer mt-16">
									<LoginIcon />
									<span className="logout">Logout</span>
								</div>
							</Link>
						</ul>
					</div>
				</Scrollbars>
			</Drawer>
		</div>
	);
};

export default SidebarDrawer;
