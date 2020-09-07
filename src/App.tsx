import React from 'react';
import { Container } from '@material-ui/core';
import Nav from './Nav';

export default function App() {
	return (
		<Container maxWidth="lg" style={{ backgroundColor: '#3B6064' }}>
			<Nav />
		</Container>
	);
}
