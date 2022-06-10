import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export * from './Home';
export * from './Login';
export * from './Register';

// Always export the type of the screen
type RootStackParamList = {
	Home: undefined;
	Login: undefined;
	Register: undefined;
};

export type ScreensProps = NativeStackScreenProps<RootStackParamList>;
