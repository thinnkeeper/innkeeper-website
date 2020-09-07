import React from 'react';
import {
	Grid,
	Card,
	CardContent,
	Typography,
	Button,
	Select,
	MenuItem,
	InputLabel,
	TextField,
} from '@material-ui/core';
import styled from 'styled-components';
import { colors } from '../../../shared/colors';

const Form = styled.form`
	display: flex;
	flex-direction: column;

	> * {
		margin: 5px 0;
	}
`;

export default function Locations(props: any) {
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
								Add a new location!
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
								<TextField
									id="standard-number"
									label="HP"
									type="number"
									variant="filled"
									InputLabelProps={{
										shrink: true,
									}}
								/>
								<InputLabel shrink id="demo-simple-select-placeholder-label-label">
									Tier
								</InputLabel>
								<Select
									labelId="simple-select-label"
									id="simple-select"
									variant="filled"
									value={1}>
									<MenuItem value={1}>common</MenuItem>
									<MenuItem value={2}>uncommon</MenuItem>
									<MenuItem value={3}>rare</MenuItem>
									<MenuItem value={4}>legendary</MenuItem>
									<MenuItem value={5}>mythic</MenuItem>
								</Select>
								<input
									accept="image/*"
									id="contained-button-file"
									multiple
									type="file"
									style={{ display: 'none' }}
								/>
								<label htmlFor="contained-button-file">
									<Button variant="contained" color="primary" component="span">
										Upload location icon
									</Button>
								</label>
								<Button variant="contained" color="secondary" type="submit">
									Add location
								</Button>
							</Form>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Card style={{ backgroundColor: colors.whiteish }}>
						<CardContent>
							<Typography
								color="textSecondary"
								variant="h6"
								component="h6"
								gutterBottom>
								See available locations!
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	);
}
