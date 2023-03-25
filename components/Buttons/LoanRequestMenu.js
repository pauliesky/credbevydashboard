import React from 'react';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import DownloadIcon from '../icons/DownloadIcon';
import GroupOptionsICon from '../Icons/GroupOptionsICon';
import WalletEyeIcon from '../Icons/WalletEyeIcon';
import InfoCircleIcon from '../Icons/InfoCircleIcon';

const LoanRequestMenu = ({ user }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<div
				className="cursor-pointer relative pointer"
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<div className="w-full h-full px-1">
					<GroupOptionsICon />
				</div>
			</div>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
				sx={{
					marginTop: '8px',
					minWidth: '162px',
					minHeight: '142px',
					padding: '16px 24px',
				}}
			>
				<MenuItem onClick={handleClose}>
					<Link href={`/loan-request/${user}`}>
						<div className="flex items-center gap-3.5 pt-4 pb-2">
							<WalletEyeIcon width={16} height={16} color="#8A8B9F" />
							<p className="text-xs font-semibold text-[#8A8B9F]">View</p>
						</div>
					</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<div className="flex self-center gap-3.5 py-3">
						<DownloadIcon width={16} height={16} color="#8A8B9F" />
						<p className="text-xs font-semibold text-[#8A8B9F]">Download</p>
					</div>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<div className="flex self-center gap-3.5 pt-2 pb-4">
						<InfoCircleIcon width={16} height={16} color="#8A8B9F" />
						<p className="text-xs font-semibold text-[#8A8B9F]">
							Send to Recova
						</p>
					</div>
				</MenuItem>
			</Menu>
		</>
	);
};

export default LoanRequestMenu;
