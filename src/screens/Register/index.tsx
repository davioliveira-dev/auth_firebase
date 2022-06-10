import {useAtom} from 'jotai';
import React, {useState} from 'react';
import {SubmitErrorHandler, useForm} from 'react-hook-form';
import {ScreensProps} from '..';
import {Button, Container} from '../../components';
import {FormField} from '../../components/FormField';
import {Toast, ToastProps} from '../../components/Toast';
import {regex} from '../../constants/regex';
import {context} from '../../context';
import {waitToastTimeout} from '../../utils/waitToastTimeout';
import {
	ButtonContainer,
	InputContainer,
	PasswordText,
	RegisterText,
	SureText,
} from './styles';

type FormData = {
	email: string;
	password: string;
	confirmPassword: string;
};

export const Register = ({navigation}: ScreensProps) => {
	const [toastProps, setToastProps] = useState<ToastProps>();
	const [showToast, setShowToast] = useAtom(context.toastContext);
	const {handleSubmit, control} = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		console.log(data);
		setToastProps({
			type: 'success',
			message: 'Thanks for being awesome! Redirecting...',
		});
		setShowToast(true);
		waitToastTimeout(() => navigation.navigate('Home'));
	};

	const onError: SubmitErrorHandler<FormData> = errors => {
		if (errors.email) {
			setToastProps({type: 'error', message: 'Please, type an valid email.'});
			setShowToast(true);
			return;
		}

		if (errors.password) {
			setToastProps({
				type: 'error',
				message:
					'Your password must be at least 6 characters long and contain at least one number.',
			});
			setShowToast(true);
			return;
		}

		if (errors.confirmPassword) {
			setToastProps({
				type: 'error',
				message: 'Your passwords do not match.',
			});
			setShowToast(true);
		}
	};

	const handleGoBack = () => navigation.navigate('Login');
	return (
		<Container>
			{showToast && toastProps && <Toast {...toastProps} />}
			<RegisterText>Lets sign up!</RegisterText>
			<InputContainer>
				<FormField
					control={control}
					name='email'
					placeholder='Your best email!'
					keyboardType='email-address'
					rules={{required: true, pattern: regex.emailRegex}}
				/>
				<PasswordText>Now type a hyper mega strong password!</PasswordText>
				<FormField
					control={control}
					name='password'
					placeholder='Your strong password'
					keyboardType='visible-password'
					rules={{required: true, pattern: regex.passwordRegex}}
				/>
				<FormField
					control={control}
					name='confirmPassword'
					placeholder='Confirm your strong password'
					keyboardType='visible-password'
					rules={{required: true, pattern: regex.passwordRegex}}
				/>
			</InputContainer>
			<SureText>You have sure about that?</SureText>
			<ButtonContainer>
				<Button title='Yes, submit' onPress={handleSubmit(onSubmit, onError)} />
				<Button outlined title='No, go back' onPress={handleGoBack} />
			</ButtonContainer>
		</Container>
	);
};
