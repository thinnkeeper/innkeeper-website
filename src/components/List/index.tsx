import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { colors } from '../../shared/colors';

export default function List(props: any) {
	const { type } = props;
	return (
		<Grid item xs={6}>
			<Card style={{ backgroundColor: colors.whiteish }}>
				<CardContent>
					<Typography color="textSecondary" variant="h6" component="h6" gutterBottom>
						List of {type}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
}
