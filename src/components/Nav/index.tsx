import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHammer,
	faCity,
	faBomb,
	faBookDead,
	faLaughBeam,
} from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../shared/colors';
import TabPanel from '../TabPanel';
import Page from '../Page';

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
					indicatorColor={'secondary'}
					textColor={'inherit'}
					centered
					style={{
						backgroundColor: colors.tertiary,
						color: colors.whiteish,
						marginTop: '-10px',
					}}
					aria-label="scrollable force tabs example">
					<Tab label="Add action" icon={<FontAwesomeIcon icon={faHammer} />} />
					<Tab label="Add location" icon={<FontAwesomeIcon icon={faCity} />} />
					<Tab label="Add item" icon={<FontAwesomeIcon icon={faBomb} />} />
					<Tab label="Add enemy" icon={<FontAwesomeIcon icon={faBookDead} />} />
					<Tab label="Add NPC" icon={<FontAwesomeIcon icon={faLaughBeam} />} />
				</Tabs>
			</AppBar>
			<TabPanel page={value} index={0}>
				<Page content={'addActions'} />
			</TabPanel>
			<TabPanel page={value} index={1}>
				<Page content={'addLocation'} />
			</TabPanel>
			<TabPanel page={value} index={2}>
				<Page content={'addItem'} />
			</TabPanel>
			<TabPanel page={value} index={3}>
				<Page content={'addEnemy'} />
			</TabPanel>
			<TabPanel page={value} index={4}>
				<Page content={'addNPC'} />
			</TabPanel>
		</>
	);
}
