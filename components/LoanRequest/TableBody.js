import React from 'react';
import { Table, Grid } from '@nextui-org/react';

import rows from './rows';
import columns from './columns';

export default function App() {
	const [selectedColor, setSelectedColor] = React.useState('primary');
	const colors = ['primary', 'secondary', 'success', 'warning', 'error'];
	const capitalize = (str) => {
		const lower = str.toLowerCase();
		return str.charAt(0).toUpperCase() + lower.slice(1);
	};

	return (
		<Grid.Container gap={2}>
			<Grid xs={12}>
				<Table
					aria-label="loan request"
					color={selectedColor}
					selectionMode="multiple"
					showSelectionCheckboxes
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
					<Table.Pagination
						minWidth="30"
						height="32"
						noMargin
						align="center"
						rowsPerPage={10}
						onPageChange={(page) => console.log({ page })}
						style={{
							margin: '22px 0',
						}}
					/>
				</Table>
			</Grid>
		</Grid.Container>
	);
}
