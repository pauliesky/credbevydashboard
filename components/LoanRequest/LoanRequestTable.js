import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const LoanRequestTable = () => {
	return (
		<div
			className="w-full h-max rounded-lg bg-white flex flex-col"
			style={{
				border: '1px solid #E5EAEF',
			}}
		>
			<TableHeader />
			<TableBody />
		</div>
	);
};

export default LoanRequestTable;
