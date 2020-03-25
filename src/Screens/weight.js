import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Weight = () => {
  var Choosing = useState(-1);
  var choose = Choosing[0];
  var setChoose = Choosing[1];
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <TouchableOpacity style={{flex: 1}}>
        <View
          style={{
            flex: 0.2,
            backgroundColor: 'white',
            marginTop: '10%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              width: '95%',
              backgroundColor: '#676463',
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{choose === -1 ? 'From' : 'from :'}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Weight;
