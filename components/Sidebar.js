import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from './Logo';
import LoginIcon from './Icons/LoginIcon';
import CategoryIcon from './Icons/CategoryIcon';
import ShoppingCartIcon from './Icons/ShoppingCartIcon';
import BagIcon from './Icons/BagIcon';
import ChartIcon from './Icons/ChartIcon';
import NotificationIcon from './Icons/NotificationIcon';
import BubbleIcon from './Icons/BubbleIcon';
import SettingsIcon from './Icons/SettingsIcon';
import EmptyWalletIcon from './Icons/EmptyWalletIcon';

const Sidebar = () => {
	const router = useRouter();
	return (
		<aside className="flex flex-col items-start justify-start">
			<div className="logo-wrapper">
				<Logo />
			</div>
			<hr />

			<ul className="sidebar--links flex flex-col items-start justify-start gap-9 mt-16">
				<Link href="/dashboard">
					<li
						className={`self-start flex justify-center items-center gap-4 ${
							router.pathname === '/dashboard' ? 'active' : ''
						}`}
					>
						<CategoryIcon />
						<span className="ml-2">Dashboard</span>
					</li>
				</Link>

				<Link href="/wallet">
					<li
						className={`self-start flex justify-center items-center gap-4 ${
							router.pathname === '/wallet' ? 'active' : ''
						}`}
					>
						<EmptyWalletIcon />
						<span className="ml-2">Wallet</span>
					</li>
				</Link>

				<Link href="/loan-products">
					<li
						className={`self-start flex justify-center items-center gap-4 ${
							router.pathname === '/loan-products' ||
							router.asPath === '/loan-products/add-product'
								? 'active'
								: ''
						}`}
					>
						<ChartIcon />
						<span className="ml-2">Loan Products</span>
					</li>
				</Link>

				<Link href="/loan-request">
					<li
						className={`self-start flex justify-center items-center gap-4 ${
							router.pathname === '/loan-request' ||
							router.asPath === '/loan-request/timioripeloye'
								? 'active'
								: ''
						}`}
					>
						<ShoppingCartIcon />
						<span className="ml-2">Loan Request</span>
					</li>
				</Link>

				<Link href="/loan-history">
					<li
						className={`self-start flex justify-center items-center gap-4 ${
							router.pathname === '/loan-history' ? 'active' : ''
						}`}
					>
						<BagIcon />
						<span className="ml-2">Loan History</span>
					</li>
				</Link>

				<Link href="/integrations">
					<li
						className={`self-start flex justify-center items-center gap-4 ${
							router.pathname === '/integrations' ? 'active' : ''
						}`}
					>
						<BubbleIcon />
						<span className="ml-2">Integrations</span>
					</li>
				</Link>

				<Link href="/settings">
					<li
						className={`self-start flex justify-center items-center gap-4 ${
							router.pathname === '/settings' ? 'active' : ''
						}`}
					>
						<SettingsIcon />
						<span className="ml-2">Settings</span>
					</li>
				</Link>

				<Link href="/">
					<div className="self-start flex justify-start items-center gap-4 cursor-pointer mt-12">
						<LoginIcon />
						<span className="logout">Logout</span>
					</div>
				</Link>
			</ul>
		</aside>
	);
};

export default Sidebar;
