import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Weight = () => {
  var FromChoosing = useState(-1);
  var fromChoose = FromChoosing[0];
  var setFromChoose = FromChoosing[1];
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => navigation.navigate('UnitDic', {name: 'Weight'})}>
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
            {fromChoose === -1 ? (
              <Text
                allowFontScaling={false}
                style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
                {' '}
                From{' '}
              </Text>
            ) : (
              <Text
                allowFontScaling={false}
                style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
                {' '}
                From :{' '}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Weight;
