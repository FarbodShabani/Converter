import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

function UnitDic() {
  const route = useRoute();
  var dataSource = useState([]);
  var dataSourceArray = dataSource[0];
  var setDataSource = dataSource[1];
  return (
    <View>
      <Text>{route.params.id}</Text>
    </View>
  );
}

export default UnitDic;
