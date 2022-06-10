import {styled} from '../../themes';

export const StyledButton = styled('TouchableOpacity', {
  alignItems: 'center',
  backgroundColor: '$text',
  borderRadius: 10,
  marginVertical: 10,
  padding: 15,
  width: '100%',
  variants: {
    outlined: {
      true: {
        backgroundColor: '$background',
        borderColor: '$text',
        marginTop: 5,
        borderWidth: 2,
      },
    },
  },
});

export const StyledButtonText = styled('Text', {
  color: '$background',
  fontWeight: '700',
  fontSize: 16,
  variants: {
    outlined: {
      true: {
        color: '$text',
      },
    },
  },
});
