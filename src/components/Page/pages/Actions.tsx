import React, { useState } from 'react';
import {
	Grid,
	Card,
	CardContent,
	Typography,
	Button,
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

export default function Actions(props: any) {
	const handleData = (event: any) => {
		event.preventDefault();
	};

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	// const [edit, setEdit] = useState(false);
	const [actions, setActions] = useState([] as any);

	const addAction = () => {
		if (name.length > 0 && description.length > 0) {
			setActions([
				...actions,
				{
					name,
					description,
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
								<input
									accept="image/*"
									id="contained-button-file"
									multiple
									type="file"
									style={{ display: 'none' }}
								/>
								<label htmlFor="contained-button-file">
									<Button variant="contained" color="primary" component="span">
										Upload action icon
									</Button>
								</label>
								<Button variant="contained" color="secondary" onClick={addAction}>
									Add action
								</Button>
							</Form>
						</CardContent>
					</Card>
				</Grid>
				<List type="actions" items={actions} />
			</Grid>
		</>
	);
}
