import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import ChevronDownIcon from '../Icons/ChevronDownIcon';
import TickCircleIcon from '../Icons/TickCircleIcon';
import DownloadIcon from '../icons/DownloadIcon';
import CloseCircleIcon from '../icons/CloseCircleIcon';

const BulkActions = () => {
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
				className="table--download__light flex justify-center items-center p-2.5 gap-2.5 ml-auto mr-8 cursor-pointer"
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<span className="text-xs font-bold">Bulk actions</span>
				<ChevronDownIcon />
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
					<div className="flex items-center gap-3.5 pt-4 pb-2">
						<TickCircleIcon width={16} height={16} color="#8A8B9F" />
						<p className="text-xs font-semibold text-[#8A8B9F]">
							Accept selected
						</p>
					</div>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<div className="flex self-center gap-3.5 py-3">
						<DownloadIcon width={16} height={16} color="#8A8B9F" />
						<p className="text-xs font-semibold text-[#8A8B9F]">
							Download selected
						</p>
					</div>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<div className="flex self-center gap-3.5 pt-2 pb-4">
						<CloseCircleIcon width={16} height={16} color="#8A8B9F" />
						<p className="text-xs font-semibold text-[#8A8B9F]">
							Decline selected
						</p>
					</div>
				</MenuItem>
			</Menu>
		</>
	);
};

export default BulkActions;
