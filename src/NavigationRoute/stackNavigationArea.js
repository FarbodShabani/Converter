import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Area from '../Screens/Area';
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

function AreaStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Area" component={Area} />
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
export default AreaStack;
