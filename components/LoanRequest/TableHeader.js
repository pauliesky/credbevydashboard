import React from 'react';
import BulkActions from '../Buttons/BulkActions';

const TableHeader = () => {
	return (
		<>
			<div className="flex justify-between items-center px-8 py-4 w-full">
				<div className="flex justify-center items-center gap-4">
					<div className="new--request">New Request</div>
					<div className="new--request__number">
						<span>48</span>
						<span>request</span>
					</div>
				</div>

				<BulkActions />
			</div>

			<hr className="w-full ml-auto mb-3" />
		</>
	);
};

export default TableHeader;
