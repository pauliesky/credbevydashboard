import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LoanDisbursed from './LoanDisbursed';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function WalletTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box
				sx={{
					borderBottom: '1px solid #e5eaef',
				}}
			>
				<Tabs value={value} onChange={handleChange} aria-label="wallet tabs">
					<Tab label="All Activities" {...a11yProps(0)} />
					<Tab label="Wallet Top Up" {...a11yProps(1)} />
					<Tab label="Loan Disbursed" {...a11yProps(2)} />
					<Tab label=" " {...a11yProps(3)} disabled />
					<Tab label=" " {...a11yProps(4)} disabled />
					<Tab label=" " {...a11yProps(5)} disabled />
					<Tab label=" " {...a11yProps(6)} disabled />
				</Tabs>
			</Box>
			<TabPanel value={value} sx={{ padding: 0 }} index={0}>
				<div className="p-6"></div>
			</TabPanel>
			<TabPanel value={value} sx={{ padding: 0 }} index={1}>
				<div className="p-6"></div>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<LoanDisbursed />
			</TabPanel>
		</Box>
	);
}
