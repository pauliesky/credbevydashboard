import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonalInfo from './PersonalInfo';
import Location from './Location';
import BankInfo from './BankInfo';
import NextOfKin from './NextOfKin';
import ProofOfId from './ProofOfId';
import Business from './Business';
import CreditScore from './CreditScore';
import RequestDetails from './RequestDetails';

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

export default function UserInfoTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: '1px solid #e5eaef ' }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="user info tabs "
				>
					<Tab label="Request details" {...a11yProps(0)} />
					<Tab label="Personal info" {...a11yProps(1)} />
					<Tab label="Location" {...a11yProps(2)} />
					<Tab label="Bank info" {...a11yProps(3)} />
					<Tab label="Next of Kin" {...a11yProps(4)} />
					<Tab label="Business" {...a11yProps(5)} />
					<Tab label="Proof of Identity" {...a11yProps(6)} />
					<Tab label="Credit score" {...a11yProps(7)} />
				</Tabs>
			</Box>
			<TabPanel value={value} sx={{ padding: 0 }} index={0}>
				<RequestDetails />
			</TabPanel>
			<TabPanel value={value} sx={{ padding: 0 }} index={1}>
				<PersonalInfo />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Location />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<BankInfo />
			</TabPanel>
			<TabPanel value={value} index={4}>
				<NextOfKin />
			</TabPanel>
			<TabPanel value={value} index={5}>
				<Business />
			</TabPanel>
			<TabPanel value={value} index={6}>
				<ProofOfId />
			</TabPanel>
			<TabPanel value={value} index={7}>
				<CreditScore />
			</TabPanel>
		</Box>
	);
}
