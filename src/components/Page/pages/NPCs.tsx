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
import { colors } from '../../../shared/colors';
import List from '../../List';

const Form = styled.form`
	display: flex;
	flex-direction: column;

	> * {
		margin: 5px 0;
	}
`;

export default function NPCs(props: any) {
	const handleData = (event: any) => {
		event.preventDefault();
	};

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [HP, setHP] = useState(1);
	const [tier, setTier] = useState('common');
	// const [edit, setEdit] = useState(false);
	const [NPCs, setNPCs] = useState([] as any);

	const addNPC = () => {
		if (name.length > 0 && description.length > 0) {
			setNPCs([
				...NPCs,
				{
					name,
					description,
					HP,
					tier,
				},
			]);
			clearEverything();
		} else {
			alert('Not all required fields are filled!');
		}
	};
	const clearEverything = () => {
		setName('');
		setDescription('');
		setHP(1);
		setTier('common');
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
								Add a new NPC
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
								<TextField
									id="standard-number"
									label="HP"
									type="number"
									variant="filled"
									value={HP}
									InputLabelProps={{
										shrink: true,
									}}
									onChange={(event: any) => setHP(event.target.value)}
								/>
								<InputLabel shrink id="simple-select-placeholder-label-label">
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
										Upload NPC icon
									</Button>
								</label>
								<Button variant="contained" color="secondary" onClick={addNPC}>
									Add NPC
								</Button>
							</Form>
						</CardContent>
					</Card>
				</Grid>
				<List type="NPCs" items={NPCs} />
			</Grid>
		</>
	);
}
