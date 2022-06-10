import {styled} from '../../themes';

export const Input = styled('TextInput', {
	backgroundColor: '$text',
	color: '$background',
	borderRadius: 10,
	marginVertical: 5,
	paddingHorizontal: 15,
	paddingVertical: 10,
}).attrs(props => ({
	placeholderTextColor: props.theme.colors.background,
}));
