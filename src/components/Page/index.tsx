import React from 'react';
// import { Box, Typography } from '@material-ui/core';
// import { colors } from '../shared/colors';

const choosePage = (content: string) => {
	switch (content) {
		case 'addActions':
			return 'actions';
		case 'addLocation':
			return 'locations';
		case 'addItem':
			return 'item';
		case 'addEnemy':
			return 'enemy';
		case 'addNPC':
			return 'npc';
		default:
			return 'home';
	}
};

export default function Page(props: any) {
	const { content } = props;

	return <div>{choosePage(content)}</div>;
}
