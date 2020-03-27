import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import DataUnit from '../Json/unitDic.json';


function UnitDic() {
  const route = useRoute();
  var Unitkind =route.params.name;
  var dataSource = useState([]);
  var dataSourceArray = dataSource[0];
  var setDataSource = dataSource[1];
  useEffect(() => {
    setDataSource(DataUnit.Unitkind)
  });
  return (
    <View>
      <Text>{Unitkind}</Text>
    </View>
  );
}

export default UnitDic;
