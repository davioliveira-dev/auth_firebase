import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {useColorScheme} from 'react-native';
import * as Screens from './src/screens';
import {darkTheme, lightTheme, ThemeProvider} from './src/themes';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? darkTheme : lightTheme;

  const defaultNavigationOptions: NativeStackNavigationOptions = {
    headerShown: false,
    statusBarStyle: isDarkMode ? 'dark' : 'light',
  };

  const screens = Object.entries(Screens).map(item => ({
    name: item[0],
    component: item[1],
  }));

  const INITIAL_ROUTE_NAME = 'Login';

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
          {screens.map(({name, component}) => {
            return (
              <Stack.Screen
                key={name}
                name={name}
                options={defaultNavigationOptions}
                component={component}
              />
            );
          })}
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
