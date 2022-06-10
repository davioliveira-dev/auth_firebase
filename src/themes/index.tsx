import {createStitches} from 'stitches-native';

const defaultColors = {
	secondary: '#CCBCBC',
	button: '#BB9BB0',
	outlinedButton: '#A288A6',
};

const {
	theme: lightTheme,
	createTheme,
	ThemeProvider,
	useTheme,
	styled,
} = createStitches({
	theme: {
		colors: {
			background: '#F1E3E4',
			text: '#1C1D21',
			...defaultColors,
		},
	},
});

const darkTheme = createTheme({
	colors: {
		background: '#1C1D21',
		text: '#F1E3E4',
		...defaultColors,
	},
});

export {lightTheme, darkTheme, ThemeProvider, useTheme, styled};
