import React from 'react';
import {
	Grid,
	Card,
	CardContent,
	Typography,
	Button,
	TextField,
} from '@material-ui/core';
import styled from 'styled-components';
import List from '../../List';
import { colors } from '../../../shared/colors';

const Form = styled.form`
	display: flex;
	flex-direction: column;

	> * {
		margin: 5px 0;
	}
`;

export default function Actions(props: any) {
	const handleData = (event: any) => {
		console.log(event);
		event.preventDefault();
	};
	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<Card style={{ backgroundColor: colors.whiteish }}>
						<CardContent>
							<Typography
								color="textSecondary"
								variant="h6"
								component="h6"
								gutterBottom>
								Add a new action
							</Typography>
							<Form noValidate autoComplete="off" onSubmit={handleData}>
								<TextField
									id="filled-size-small"
									label="Name"
									variant="filled"
									required
									size="small"
								/>
								<TextField
									id="filled-size-small"
									label="Description"
									variant="filled"
									required
									size="small"
									multiline
								/>
								<label htmlFor="contained-button-file">
									<Button variant="contained" color="primary" component="span">
										Upload action icon
									</Button>
								</label>
								<Button variant="contained" color="secondary" type="submit">
									Add action
								</Button>
							</Form>
						</CardContent>
					</Card>
				</Grid>
				<List type="actions" />
			</Grid>
		</>
	);
}
