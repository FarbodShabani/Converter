import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import unitDic from '../Json/unitDic.json';

const Units = props => {
  if (props.kind === 'Weight') {
    var dataSource = useState([]);
    var dataSourceWeight = dataSource[0];
    var setDataSourceWeight = dataSource[1];
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
