import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Weight from '../Screens/weight';
import Length from '../Screens/Length';
import Volume from '../Screens/Volume';
import Area from '../Screens/Area.js';
import Bmi from '../Screens/Bmi';

const Tab = createMaterialTopTabNavigator();

function NavigationRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Weight" component={Weight} />
      <Tab.Screen name="Length" component={Length} />
      <Tab.Screen name="Volume" component={Volume} />
      <Tab.Screen name="Area" component={Area} />
      <Tab.Screen name="Bmi" component={Bmi} />
    </Tab.Navigator>
  );
}

export default NavigationRoutes;
