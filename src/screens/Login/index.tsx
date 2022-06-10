import {useAtom} from 'jotai';
import React, {useState} from 'react';
import {ScreensProps} from '..';
import {Button, Container, Input} from '../../components';
import {Toast, ToastProps} from '../../components/Toast';
import {context} from '../../context';
import {waitToastTimeout} from '../../utils/waitToastTimeout';
import {ButtonContainer, InputContainer, WelcomeText} from './styles';

export const Login = ({navigation}: ScreensProps) => {
	const [showToast, setShowToast] = useAtom(context.toastContext);
	const [toastProps, setToastProps] = useState<ToastProps>();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		const isValidEmail = email.includes('@');
		const isValidPassword = password.length > 5;

		if (!isValidEmail) {
			setToastProps({type: 'error', message: 'Invalid email'});
			setShowToast(true);
			return;
		}

		if (!isValidPassword) {
			setToastProps({type: 'error', message: 'Invalid password'});
			setShowToast(true);
			return;
		}

		setToastProps({
			type: 'success',
			message: 'Welcome back! We are redirecting you ...',
		});
		setShowToast(true);
		waitToastTimeout(() => navigation.navigate('Home'));
	};

	const handleRegister = () => navigation.navigate('Register');

	return (
		<Container>
			{showToast && toastProps && <Toast {...toastProps} />}
			<WelcomeText>Welcome!</WelcomeText>
			<WelcomeText withMargin>Please, enter your credentials.</WelcomeText>
			<InputContainer>
				<Input
					placeholder='Email'
					keyboardType='email-address'
					onChangeText={setEmail}
				/>
				<Input
					placeholder='Password'
					secureTextEntry
					onChangeText={setPassword}
				/>
			</InputContainer>
			<ButtonContainer>
				<Button onPress={handleLogin} title='Login' />
				<Button outlined onPress={handleRegister} title='Register' />
			</ButtonContainer>
		</Container>
	);
};
