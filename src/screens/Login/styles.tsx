import {styled} from '../../themes';

export const WelcomeText = styled('Text', {
  color: '$text',
  fontSize: 20,
  fontWeight: 'bold',
  variants: {
    withMargin: {true: {margin: 20}},
  },
});

export const InputContainer = styled('View', {
  width: '60%',
});

export const ButtonContainer = styled('View', {
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 40,
  width: '60%',
});
