import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

import Units from '../Components/units';

function UnitDic() {
  const route = useRoute();
  var Unitkind = route.params.name;
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
      <ScrollView
        style={{flex: 1, flexDirection: 'column', backgroundColor: 'red'}}>
        <Units kind={Unitkind} />
      </ScrollView>
    </View>
  );
}

export default UnitDic;
