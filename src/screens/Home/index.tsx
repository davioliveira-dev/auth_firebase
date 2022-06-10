import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '../../themes';
import {Container} from './styles';

export const Home = () => {
  const theme = useTheme();

  return (
    <Container>
      <Text style={{color: theme.colors.text}}>Hello world!</Text>
    </Container>
  );
};
