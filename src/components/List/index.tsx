import React from 'react';
import {
	Grid,
	Card,
	CardContent,
	Typography,
	List as MUIList,
	ListItem,
	ListItemAvatar,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	Avatar,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTrash,
	faRunning,
	faCity,
	faShieldAlt,
	faBookDead,
	faLaughBeam,
	faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../shared/colors';

function ItemsTable(props: any) {
	const { type, items } = props;

	const itemIcon = () => {
		switch (type) {
			case 'actions':
				return <FontAwesomeIcon icon={faRunning} />;
			case 'locations':
				return <FontAwesomeIcon icon={faCity} />;
			case 'items':
				return <FontAwesomeIcon icon={faShieldAlt} />;
			case 'enemies':
				return <FontAwesomeIcon icon={faBookDead} />;
			case 'NPCs':
				return <FontAwesomeIcon icon={faLaughBeam} />;
			default:
				return <FontAwesomeIcon icon={faQuestionCircle} />;
		}
	};
	const itemData = (item: any) => {
		let itemDataMerged = item.description;
		for (let field in item) {
			if (field !== 'description' && field !== 'name')
				itemDataMerged += ` | ${field}: ${item[field]}`;
		}
		return itemDataMerged;
	};
	const itemList = () => {
		if (items)
			return items.map((item: any) => {
				const mergedItemData = itemData(item);
				return (
					<ListItem>
						<ListItemAvatar>
							<Avatar>{itemIcon()}</Avatar>
						</ListItemAvatar>
						<ListItemText primary={item.name} secondary={mergedItemData} />
						<ListItemSecondaryAction>
							<IconButton edge="end" aria-label="delete">
								<FontAwesomeIcon icon={faTrash} />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				);
			});
		else return null;
	};
	return <MUIList dense={true}>{itemList()}</MUIList>;
}

export default function List(props: any) {
	const { type, items } = props;
	return (
		<Grid item xs={6}>
			<Card style={{ backgroundColor: colors.whiteish }}>
				<CardContent>
					<Typography color="textSecondary" variant="h6" component="h6" gutterBottom>
						List of {type}
					</Typography>
					<ItemsTable type={type} items={items} />
				</CardContent>
			</Card>
		</Grid>
	);
}
