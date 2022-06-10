import {Animated} from 'react-native';
import {styled} from '../../themes';

export const ToastContainer = styled('View', {
	alignItems: 'center',
	flex: 1,
	width: '100%',
});

export const StyledToast = styled('View', {
	alignItems: 'flex-start',
	borderTopLeftRadius: 10,
	borderTopRightRadius: 10,
	display: 'flex',
	height: '10%',
	justifyContent: 'space-between',
	marginTop: '10%',
	width: '70%',
	variants: {
		type: {
			success: {
				backgroundColor: '#00b300',
			},
			error: {
				backgroundColor: '#ff0000',
			},
			warning: {
				backgroundColor: '#ffa500',
			},
		},
	},
}).attrs(props => ({
	style: {
		backgroundColor: props.type ? props.type : props.theme.colors.secondary,
	},
}));

export const ToastTextContainer = styled('View', {
	alignSelf: 'center',
	alignItems: 'center',
	height: '90%',
	justifyContent: 'center',
	width: '100%',
});

export const ToastText = styled('Text', {
	color: '#fff',
	fontSize: 18,
	marginHorizontal: '5%',
});

export const ProgressBar = styled(Animated.View, {
	alignSelf: 'stretch',
	backgroundColor: '#ffff',
	height: '7%',
});
