import React from 'react';
import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHammer,
	faCity,
	faBomb,
	faBookDead,
	faLaughBeam,
} from '@fortawesome/free-solid-svg-icons';

function TabPanel(props: any) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

export default function Nav() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: any, newValue: any) => {
		setValue(newValue);
	};

	return (
		<>
			<AppBar position="static" color="default">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					centered
					style={{ backgroundColor: '#C9E4CA', color: '#364958' }}
					aria-label="scrollable force tabs example">
					<Tab label="Add action" icon={<FontAwesomeIcon icon={faHammer} />} />
					<Tab label="Add location" icon={<FontAwesomeIcon icon={faCity} />} />
					<Tab label="Add item" icon={<FontAwesomeIcon icon={faBomb} />} />
					<Tab label="Add enemy" icon={<FontAwesomeIcon icon={faBookDead} />} />
					<Tab label="Add NPC" icon={<FontAwesomeIcon icon={faLaughBeam} />} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				Item One
			</TabPanel>
			<TabPanel value={value} index={1}>
				Item Two
			</TabPanel>
			<TabPanel value={value} index={2}>
				Item Three
			</TabPanel>
			<TabPanel value={value} index={3}>
				Item Four
			</TabPanel>
			<TabPanel value={value} index={4}>
				Item Five
			</TabPanel>
			<TabPanel value={value} index={5}>
				Item Six
			</TabPanel>
			<TabPanel value={value} index={6}>
				Item Seven
			</TabPanel>
		</>
	);
}
