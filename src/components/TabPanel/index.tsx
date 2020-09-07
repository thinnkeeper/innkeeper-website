import React from 'react';
import { Box, Typography } from '@material-ui/core';
// import { colors } from '../shared/colors';

export default function TabPanel(props: any) {
	const { children, page, index } = props;

	return (
		<div
			role="tabpanel"
			hidden={page !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}>
			{page === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
