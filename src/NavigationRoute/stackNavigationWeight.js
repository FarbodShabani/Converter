import React from 'react';
import {View, Button, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Weight from '../Screens/weight';
import UnitDic from '../Screens/UnitDic';

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Stack = createStackNavigator();

function WeightStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Weight" component={Weight} />
      <Stack.Screen
        name="UnitDic"
        component={UnitDic}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </Stack.Navigator>
  );
}
export default WeightStack;
