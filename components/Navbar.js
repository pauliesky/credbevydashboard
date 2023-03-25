import Image from 'next/image';

import SearchIcon from './Icons/SearchIcon';
import NotificationIcon from './Icons/NotificationIcon';
import SidebarDrawer from './SidebarDrawer';

const Navbar = () => {
	return (
		<nav className="navbar flex justify-between items-center w-full py-6 px-4 md:px-7">
			<div className="flex justify-center items-center xl:hidden cursor-pointer">
				<SidebarDrawer />
			</div>
			<div className="flex justify-center items-center gap-px navbar--search">
				<div className="ml-auto cursor-pointer">
					<SearchIcon />
				</div>
				<input
					type="search"
					placeholder="What are you looking for?"
					className="navbar--search__input outline-none focus:outline-0 bg-transparent text-sm p-2 placeholder:text-xs placeholder:font-bold placeholder:flex-none"
				/>
			</div>

			<div className="flex items-center sm:gap-0 lg:mr-20">
				<div className="cursor-pointer">
					<NotificationIcon />
				</div>
				<hr className="hr hidden md:flex" />

				<div className="flex justify-center items-center gap-2 mt-1">
					<div className="rounded-full cursor-pointer ml-6 md:ml-0 company--info">
						<Image
							alt="company-logo"
							src="/img/company-logo.png"
							width={28}
							height={28}
						/>
					</div>
					<div className="hidden md:flex flex-col items-start justify-start gap-2">
						<p className="company-name font-bold">Company Name</p>
						<p className="company-name__email font-semibold">
							Companyname@gmail.com
						</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
