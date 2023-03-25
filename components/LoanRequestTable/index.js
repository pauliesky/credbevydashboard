import React, { useMemo } from 'react';
import { useTable, useRowSelect } from 'react-table';
import rowsData from './rowsData';
import { COLUMNS } from './columns';
import TableHeader from '../LoanRequest/TableHeader';
import { Checkbox } from '../UI/Checkbox';

export const LoanRequestTable = () => {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => rowsData, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		selectedFlatRows,
	} = useTable(
		{
			columns,
			data,
		},
		useRowSelect,
		(hooks) => {
			hooks.visibleColumns.push((columns) => {
				return [
					{
						// id: 'selection',
						// Header: ({ getToggleAllRowsSelectedProps }) => (
						// 	<Checkbox {...getToggleAllRowsSelectedProps()} />
						// ),
						Cell: ({ row }) => (
							<Checkbox {...row.getToggleRowSelectedProps()} />
						),
					},
					...columns,
				];
			});
		}
	);

	console.log(selectedFlatRows);

	return (
		<div
			className="w-full h-max rounded-lg bg-white flex flex-col"
			style={{
				border: '1px solid #E5EAEF',
			}}
		>
			<TableHeader />
			<table {...getTableProps()} className="loan-request">
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
