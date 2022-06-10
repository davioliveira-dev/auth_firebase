import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {StyledButton, StyledButtonText} from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  outlined?: boolean | 'true' | undefined;
};

export const Button = ({title, outlined, ...props}: ButtonProps) => {
  return (
    <StyledButton outlined={outlined} {...props}>
      <StyledButtonText outlined={outlined}>{title}</StyledButtonText>
    </StyledButton>
  );
};
