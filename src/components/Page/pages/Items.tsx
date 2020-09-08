import React, { useState } from 'react';
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
import List from '../../List';
import { colors } from '../../../shared/colors';

const Form = styled.form`
	display: flex;
	flex-direction: column;

	> * {
		margin: 5px 0;
	}
`;

export default function Items(props: any) {
	const handleData = (event: any) => {
		console.log(name);
		console.log(description);
		console.log(type);
		console.log(tier);
		event.preventDefault();
	};

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [type, setType] = useState('consumable');
	const [tier, setTier] = useState('common');

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
								Add a new item!
							</Typography>
							<Form noValidate autoComplete="off" onSubmit={handleData}>
								<TextField
									id="filled-size-small"
									label="Name"
									variant="filled"
									required
									size="small"
									value={name}
									onChange={(event: any) => setName(event.target.value)}
								/>
								<TextField
									id="filled-size-small"
									label="Description"
									variant="filled"
									required
									size="small"
									multiline
									value={description}
									onChange={(event: any) => setDescription(event.target.value)}
								/>
								<InputLabel shrink id="demo-simple-select-placeholder-label-label">
									Type
								</InputLabel>
								<Select
									labelId="simple-select-label"
									id="simple-select"
									variant="filled"
									value={type}
									onChange={(event: any) => setType(event.target.value)}>
									<MenuItem value={'consumable'}>consumable</MenuItem>
									<MenuItem value={'notconsumable'}>not consumable</MenuItem>
								</Select>
								<InputLabel shrink id="demo-simple-select-placeholder-label-label">
									Tier
								</InputLabel>
								<Select
									labelId="simple-select-label"
									id="simple-select"
									variant="filled"
									value={tier}
									onChange={(event: any) => setTier(event.target.value)}>
									<MenuItem value={'common'}>common</MenuItem>
									<MenuItem value={'uncommon'}>uncommon</MenuItem>
									<MenuItem value={'rare'}>rare</MenuItem>
									<MenuItem value={'legendary'}>legendary</MenuItem>
									<MenuItem value={'mythic'}>mythic</MenuItem>
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
										Upload item icon
									</Button>
								</label>
								<Button variant="contained" color="secondary" type="submit">
									Add item
								</Button>
							</Form>
						</CardContent>
					</Card>
				</Grid>
				<List type="items" />
			</Grid>
		</>
	);
}
