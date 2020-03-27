import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import unitDic from '../Json/unitDic.json';

const Units = props => {
  if (props.kind === 'Weight') {
    return (
      <View>
        <Text>{props.kind}</Text>
      </View>
    );
  } else {
    return;
  }
};
export default Units;
