import {useAtom} from 'jotai';
import React, {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import Modal from 'react-native-modal';
import {context} from '../../context';
import {
	ProgressBar,
	StyledToast,
	ToastContainer,
	ToastText,
	ToastTextContainer,
} from './styles';

export type ToastProps = {
	message: string;
	type: 'success' | 'error' | 'warning';
};

export const Toast = ({message, type}: ToastProps) => {
	const [show, setShow] = useAtom(context.toastContext);
	const [isVisible, setIsVisible] = useState(show);

	const animation = useRef(new Animated.Value(0)).current;

	const config = {
		inputRange: [0, 1],
		outputRange: ['0%', '100%'],
	};

	useEffect(() => {
		Animated.timing(animation, {
			duration: 2000,
			toValue: 1,
			useNativeDriver: false,
		}).start(() => setIsVisible(false));
	}, []);

	return (
		<Modal
			isVisible={isVisible}
			animationIn='fadeIn'
			animationOut='fadeOut'
			backdropColor='transparent'
			coverScreen={false}
			avoidKeyboard={true}
			onBackButtonPress={() => setIsVisible(false)}
			onModalHide={() => setShow(false)}>
			<ToastContainer>
				<StyledToast type={type}>
					<ToastTextContainer>
						<ToastText>{message}</ToastText>
					</ToastTextContainer>
					<ProgressBar style={{width: animation.interpolate(config)}} />
				</StyledToast>
			</ToastContainer>
		</Modal>
	);
};
