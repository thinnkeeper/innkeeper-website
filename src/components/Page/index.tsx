import React from 'react';
// import { Box, Typography } from '@material-ui/core';
// import { colors } from '../shared/colors';
import { Actions, Enemies, Items, Locations, NPCs } from './pages';

const choosePage = (content: string) => {
	switch (content) {
		case 'addActions':
			return <Page.Actions />;
		case 'addLocation':
			return <Page.Locations />;
		case 'addItem':
			return <Page.Items />;
		case 'addEnemy':
			return <Page.Enemies />;
		case 'addNPC':
			return <Page.NPCs />;
		default:
			return 'home';
	}
};

export default function Page(props: any) {
	const { content } = props;

	return <div>{choosePage(content)}</div>;
}

Page.Actions = Actions;
Page.Locations = Locations;
Page.Items = Items;
Page.Enemies = Enemies;
Page.NPCs = NPCs;
