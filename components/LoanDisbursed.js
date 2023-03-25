import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import Pagination from '@mui/material/Pagination';
import TableRow from '@mui/material/TableRow';
import User from './User';

export const columns = [
	{ id: 'reciever', label: 'Reciever', width: 50, align: 'left' },
	{
		id: 'credit',
		label: 'C.S',
		width: 10,
		align: 'right',
	},
	{
		id: 'amount',
		label: 'Amount',
		width: 10,
		align: 'center',
	},
	{
		id: 'date',
		label: 'Date ',
		width: 10,
		align: 'left',
	},
	{
		id: ' ',
		label: ' ',
		width: 10,
		align: 'left',
	},
	{
		id: ' ',
		label: ' ',
		width: 10,
		align: 'left',
	},
	{
		id: ' ',
		label: ' ',
		width: 10,
		align: 'left',
	},
	{
		id: ' ',
		label: ' ',
		width: 10,
		align: 'left',
	},
	{
		id: ' ',
		label: ' ',
		width: 10,
		align: 'left',
	},
];

// Function from the MUI table library
function createData(reciever, credit, amount, date) {
	return { reciever, credit, amount, date };
}

// Data for the Table cells
export const rows = [
	createData(
		<User username="Oripeloye Timilehin" width={32} height={32} />,
		<span style={{ color: '#42BE65' }}>750</span>,
		<div className="table--amount__wallet">
			<span className="naira__amount">₦</span>
			<span>134,000</span>
		</div>,
		'9/27/22'
	),
	createData(
		<User username="Oripeloye Timilehin" width={32} height={32} />,
		<span style={{ color: '#42BE65' }}>750</span>,
		<div className="table--amount__wallet">
			<span className="naira__amount">₦</span>
			<span>134,000</span>
		</div>,
		'9/27/22'
	),
	createData(
		<User username="Oripeloye Timilehin" width={32} height={32} />,
		<span style={{ color: '#42BE65' }}>750</span>,
		<div className="table--amount__wallet">
			<span className="naira__amount">₦</span>
			<span>134,000</span>
		</div>,
		'9/27/22'
	),
	createData(
		<User username="Oripeloye Timilehin" width={32} height={32} />,
		<span style={{ color: '#42BE65' }}>750</span>,
		<div className="table--amount__wallet">
			<span className="naira__amount">₦</span>
			<span>134,000</span>
		</div>,
		'9/27/22'
	),
	createData(
		<User username="Oripeloye Timilehin" width={32} height={32} />,
		<span style={{ color: '#42BE65' }}>750</span>,
		<div className="table--amount__wallet">
			<span className="naira__amount">₦</span>
			<span>134,000</span>
		</div>,
		'9/27/22'
	),
];

export default function LoanDisbursed() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper
			variant="none"
			sx={{
				width: '100%',
				overflow: 'hidden',
				fontSize: '14px',
				position: 'relative',
			}}
		>
			<TableContainer>
				<Table aria-label="sticky table">
					<TableHead>
						<TableRow sx={{ width: '100%', overflow: 'hidden' }}>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{
										width: column.width,
										fontSize: '14px',
										paddingLeft: '24px',
										fontWeight: 700,
										color: '#8A8B9F',
									}}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.email}>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell
													key={column.id}
													align={column.align}
													style={{
														paddingLeft: '24px',
														fontWeight: 600,
													}}
												>
													{column.format && typeof value === 'number'
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			{/* <TablePagination
				rowsPerPageOptions={[0]}
				// StickyHeadTable={false}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/> */}
			{/* <Pagination variant="outlined" shape="rounded" /> */}
		</Paper>
	);
}
