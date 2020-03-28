import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

import Units from '../Components/units';

function UnitDic() {
  const route = useRoute();
  var Unitkind = route.params.name;
  var where = route.params.type;
  return (
    <View style={{flex: 1}}>
      <View
        style={{flex: 0.15, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          allowFontScaling={false}
          style={{fontSize: 50, color: '#676463', textAlign: 'center'}}>
          from
        </Text>
      </View>
      <View style={{backgroundColor: '#676463', width: '100%', height: '0.00489%'}} />
      <ScrollView
        style={{flex: 1, flexDirection: 'column', backgroundColor: '#ECF0F1'}}>
        <Units kind={Unitkind} type={where} />
      </ScrollView>
    </View>
  );
}

export default UnitDic;
