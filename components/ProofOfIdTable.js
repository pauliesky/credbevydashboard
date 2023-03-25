import React from 'react';
import Link from 'next/link';
import { Table, Grid, Radio } from '@nextui-org/react';

import GroupOptionsICon from './icons/GroupOptionsICon';
import PdfIcon from './icons/PdfIcon';
import DocIcon from './icons/DocIcon';
import Extension from './Extension';
import ChevronDownIcon from './icons/ChevronDownIcon';

export default function App() {
	const [selectedColor, setSelectedColor] = React.useState('primary');
	const colors = ['primary', 'secondary', 'success', 'warning', 'error'];
	const capitalize = (str) => {
		const lower = str.toLowerCase();
		return str.charAt(0).toUpperCase() + lower.slice(1);
	};
	const columns = [
		{
			key: 'doc_name',
			label: 'Document Name',
		},
		{
			key: 'doc_type',
			label: 'Document Type',
		},
		{
			key: 'date',
			label: 'Date Uploaded',
		},
		{
			key: 'extension',
			label: 'EXT.',
		},
		{
			key: 'size',
			label: 'Size',
		},
		{
			key: 'view',
			label: ' ',
		},
		{
			key: 'download',
			label: ' ',
		},
	];
	const rows = [
		{
			key: '1',
			doc_name: "My Driver's Licence",
			doc_type: "Driver's Licence",
			date: '23/10/2022, 4:50PM',
			extension: <Extension icon={<PdfIcon />} ext="PDF" />,
			size: '10 MB',
			view: (
				<Link href="/loan-request/timioripeloye">
					<p style={{ color: '#8003CD', fontWeight: 700, cursor: 'pointer' }}>
						View
					</p>
				</Link>
			),
			download: (
				<Link href="/loan-request/timioripeloye">
					<p style={{ color: '#8003CD', fontWeight: 700, cursor: 'pointer' }}>
						Download
					</p>
				</Link>
			),
			options: <GroupOptionsICon />,
		},
		{
			key: '2',
			doc_name: "My Driver's Licence",
			doc_type: "Driver's Licence",
			date: '23/10/2022, 4:50PM',
			extension: <Extension icon={<DocIcon />} ext="DOC" />,
			size: '10 MB',
			view: (
				<Link href="/loan-request/timioripeloye">
					<p style={{ color: '#8003CD', fontWeight: 700, cursor: 'pointer' }}>
						View
					</p>
				</Link>
			),
			download: (
				<Link href="/loan-request/timioripeloye">
					<p style={{ color: '#8003CD', fontWeight: 700, cursor: 'pointer' }}>
						Download
					</p>
				</Link>
			),
			options: <GroupOptionsICon />,
		},
		{
			key: '3',
			doc_name: "My Driver's Licence",
			doc_type: "Driver's Licence",
			date: '23/10/2022, 4:50PM',
			extension: <Extension icon={<PdfIcon />} ext="PDF" />,
			size: '10 MB',
			view: (
				<Link href="/loan-request/timioripeloye">
					<p style={{ color: '#8003CD', fontWeight: 700, cursor: 'pointer' }}>
						View
					</p>
				</Link>
			),
			download: (
				<Link href="/loan-request/timioripeloye">
					<p style={{ color: '#8003CD', fontWeight: 700, cursor: 'pointer' }}>
						Download
					</p>
				</Link>
			),
		},
	];
	return (
		<Grid.Container gap={2}>
			<div className="table--download__light flex justify-center items-center p-2.5 gap-2.5 ml-auto mr-8 cursor-pointer">
				<span className="text-xs font-medium">Bulk actions</span>
				<ChevronDownIcon />
			</div>
			<Grid xs={12}>
				<Table
					aria-label="proof of identity"
					color={selectedColor}
					selectionMode="multiple"
					containerCss={{
						height: 'auto',
						minWidth: '100%',
					}}
				>
					<Table.Header columns={columns}>
						{(column) => (
							<Table.Column key={column.key}>{column.label}</Table.Column>
						)}
					</Table.Header>
					<Table.Body items={rows}>
						{(item) => (
							<Table.Row key={item.key}>
								{(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
							</Table.Row>
						)}
					</Table.Body>
				</Table>
			</Grid>
		</Grid.Container>
	);
}
