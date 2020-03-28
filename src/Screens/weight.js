import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const Weight = () => {
  var FromId = useState(-1);
  var fromId = FromId[0];
  var setFromId = FromId[1];
  var FromData = useState(0);
  var fromData = FromData[0];
  var setFromData = FromData[1];
  var FromSubData = useState(0);
  var fromSubData = FromSubData[0];
  var setFromSubData = FromSubData[1];

  var ToId = useState(-1);
  var toId = ToId[0];
  var setToId = ToId[1];
  var ToData = useState(0);
  var toData = ToData[0];
  var setToData = ToData[1];
  var ToSubData = useState(0);
  var toSubData = ToSubData[0];
  var setToSubData = ToSubData[1];
  const navigation = useNavigation();
 
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <View
        style={{
          flex: 0.2,
          marginTop: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{flex: 1, width: '95%', marginRight: '-4%'}}
          onPress={() => navigation.navigate('UnitDic', {name: 'Weight', type:'From'})}>
          <View
            style={{
              flex: 1,
              width: '95%',
              backgroundColor: '#676463',
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextFrom upDateIdFrom={setFromId} upDateFromData={setFromData} upDateFromSubData={setFromSubData} />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.2,
          marginTop: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{flex: 1, width: '95%', marginRight: '-4%'}}
          onPress={() => navigation.navigate('UnitDic', {name: 'Weight', type: 'To'})}>
          <View
            style={{
              flex: 1,
              width: '95%',
              backgroundColor: '#676463',
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextTo upDateIdTo={setToId} upDateToData={setToData} upDateToSubData={setToSubData} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function TextFrom(props) {
  const route = useRoute();
  if (route.params?.nameF) {
    props.upDateIdFrom(route.params.idF);
    props.upDateFromData(route.params.dataF);
    props.upDateFromSubData(route.params.subDataF);
    return <Text
                allowFontScaling={false}
                style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
                {' '}
                From :{route.params.nameF}
              </Text>
  } else {
    return <Text
                allowFontScaling={false}
                style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
                {' '}
                From{' '}
              </Text>}
  
}

function TextTo(props) {
  const route = useRoute();
  if (route.params?.name) {
    props.upDateIdTo(route.params.id);
    props.upDateToData(route.params.data);
    props.upDateToSubData(route.params.subData);
    return <Text
                allowFontScaling={false}
                style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
                {' '}
                To :{route.params.name}
              </Text>
  } else {
    return <Text
                allowFontScaling={false}
                style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
                {' '}
                To{' '}
              </Text>}
  
}
export default Weight;
