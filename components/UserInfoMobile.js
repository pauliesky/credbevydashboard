import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowDownIcon from './icons/ArrowDownIcon';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowDownIcon color={'#8a8b9f'} sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark'
			? 'rgba(255, 255, 255, 1)'
			: 'rgba(0, 0, 0, 0)',
	flexDirection: 'row',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(180deg)',
		stroke: '#8003cd',
	},
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded svg': {
		stroke: '#8003cd',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
	'& .MuiAccordionSummary-content.Mui-expanded p': {
		color: '#8003cd',
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function UserInfoMoble() {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div>
			<Accordion
				expanded={expanded === 'panel0'}
				onChange={handleChange('panel0')}
			>
				<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
					<Typography
						sx={{
							color: '#8A8B9F',
							fontWeight: 600,
							fontSize: '14px',
							marginLeft: '-8px',
						}}
					>
						Request details
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div className="flex flex-col gap-6">
						<div className="flex">
							<span className="biodata--label basis-2/5">Product type</span>
							<span className="biodata--label__value flex-1">Silver</span>
						</div>
						<div className="flex">
							<span className="biodata--label basis-2/5">Amount</span>
							<span className="biodata--label__value flex-1">#130, 000</span>
						</div>
						<div className="flex">
							<span className="biodata--label basis-2/5">Monthly Payment</span>
							<span className="biodata--label__value flex-1">#20, 000</span>
						</div>
						<div className="flex">
							<span className="biodata--label basis-2/5">Interest Rate </span>
							<span className="biodata--label__value flex-1">12%</span>
						</div>
						<div className="flex">
							<span className="biodata--label basis-2/5">Duration</span>
							<span className="biodata--label__value flex-1">4 months </span>
						</div>
					</div>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
			>
				<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
					<Typography
						sx={{
							color: '#8A8B9F',
							fontWeight: 600,
							fontSize: '14px',
							marginLeft: '-8px',
						}}
					>
						Personal info
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div className="flex flex-col gap-6">
						<div className="flex">
							<span className="biodata--label basis-2/5">First Name</span>
							<span className="biodata--label__value flex-1">Oripeloye</span>
						</div>
						<div className="flex">
							<span className="biodata--label basis-2/5">Last Name</span>
							<span className="biodata--label__value flex-1">Timilehin</span>
						</div>
						<div className="flex">
							<span className="biodata--label basis-2/5">Phone Number</span>
							<span className="biodata--label__value flex-1">
								+2349055380387
							</span>
						</div>
						<div className="flex">
							<span className="biodata--label basis-2/5">Email </span>
							<span className="biodata--label__value flex-1">
								Timilehinoripeloye@
								<br />
								gmail.com
							</span>
						</div>
						<div className="flex">
							<span className="biodata--label basis-2/5">Date of Birth</span>
							<span className="biodata--label__value flex-1">
								16th December 1991 (31 yrs old)
							</span>
						</div>
						<div className="flex">
							<span className="biodata--label basis-2/5">Education</span>
							<span className="biodata--label__value flex-1">
								Bachelor of Science (B.Sc)
							</span>
						</div>
						<div className="flex">
							<span className="biodata--label basis-2/5">Marital Status</span>
							<span className="biodata--label__value flex-1">Single </span>
						</div>
					</div>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel2'}
				onChange={handleChange('panel2')}
			>
				<AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
					<Typography
						sx={{
							color: '#8A8B9F',
							fontWeight: 600,
							fontSize: '14px',
							marginLeft: '-8px',
							marginLeft: '-8px',
						}}
					>
						Location
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div className="flex flex-col gap-6">
						<div className="flex">
							<span className="biodata--label basis-1/4">Address</span>
							<span className="biodata--label__value flex-1">
								10, Lawani Street, Abule Oja, Yaba, Lagos
							</span>
						</div>
						<div className="flex">
							<span className="biodata--label basis-1/4">State</span>
							<span className="biodata--label__value flex-1">Lagos</span>
						</div>
						<div className="flex">
							<span className="biodata--label basis-1/4">LGA</span>
							<span className="biodata--label__value flex-1">
								Lagos Mainland
							</span>
						</div>
					</div>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel3'}
				onChange={handleChange('panel3')}
			>
				<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
					<Typography
						sx={{
							color: '#8A8B9F',
							fontWeight: 600,
							fontSize: '14px',
							marginLeft: '-8px',
						}}
					>
						Bank info
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div className="flex flex-col gap-6">
						<div className="flex">
							<span className="biodata--label basis-2/5">Bank Name</span>
							<span className="biodata--label__value flex-1">
								Guarantee Trust Bank (GTB)
							</span>
						</div>
						<div className="flex">
							<span className="biodata--label basis-2/5">Account Name</span>
							<span className="biodata--label__value flex-1">
								Oripeloye Timilehin John
							</span>
						</div>
						<div className="flex">
							<span className="biodata--label basis-2/5">Phone Number</span>
							<span className="biodata--label__value flex-1">
								+2349055380387
							</span>
						</div>
						<div className="flex">
							<span className="biodata--label basis-2/5">BVN</span>
							<span className="biodata--label__value flex-1">22763839373</span>
						</div>
					</div>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel4'}
				onChange={handleChange('panel4')}
			>
				<AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
					<Typography
						sx={{
							color: '#8A8B9F',
							fontWeight: 600,
							fontSize: '14px',
							marginLeft: '-8px',
						}}
					>
						Business
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
						lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel5'}
				onChange={handleChange('panel5')}
			>
				<AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
					<Typography
						sx={{
							color: '#8A8B9F',
							fontWeight: 600,
							fontSize: '14px',
							marginLeft: '-8px',
						}}
					>
						Proof of Identity
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
						lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel6'}
				onChange={handleChange('panel6')}
			>
				<AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
					<Typography
						sx={{
							color: '#8A8B9F',
							fontWeight: 600,
							fontSize: '14px',
							marginLeft: '-8px',
						}}
					>
						Credit score
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
						lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
