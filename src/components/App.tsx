import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Container } from '@material-ui/core';
import { colors } from '../shared/colors';
import Nav from './Nav';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.background};
  }
`;

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Container maxWidth="lg" style={{ backgroundColor: colors.primary }}>
				<Nav />
			</Container>
		</>
	);
}
