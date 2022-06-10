import React from 'react';
import {Controller, ControllerProps} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {Input} from '../Input';

type FormFieldProps<T> = Omit<
	ControllerProps<T>,
	'shouldUnregister' | 'render'
> &
	Omit<TextInputProps, 'onChange' | 'onChangeText' | 'value'>;

export const FormField = ({
	name,
	control,
	rules,
	defaultValue,
	...rest
}: FormFieldProps<any>) => (
	<Controller
		shouldUnregister
		name={name}
		control={control}
		rules={rules}
		defaultValue={defaultValue}
		render={({field: {onChange, value}}) => (
			<Input onChangeText={text => onChange(text)} value={value} {...rest} />
		)}
	/>
);
