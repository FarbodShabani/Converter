import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Volume from '../Screens/Volume';
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

function VolumeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Volume" component={Volume} />
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
export default VolumeStack;
