import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import NavigationRoutes from './src/NavigationRoute';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleAllowFontScaling: false,
          headerBackTitleVisible: false,
          headerTitleStyle: {color: 'white'},
          headerBackground: () => (
            <View style={{backgroundColor: '#226774', flex: 1}} />
          ),
        }}>
        <Stack.Screen name="Converter" component={NavigationRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
