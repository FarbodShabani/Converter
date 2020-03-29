import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const Area = () => {
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

  var Input = useState('Area');
  var inputValue = Input[0];
  var setInput = Input[1];

  var Answer = useState(0);
  var answerValue = Answer[0];
  var setAnswer = Answer[1];

  var Result = useState(0);
  var resultValue = Result[0];
  var setResult = Result[1];

  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.2,
          marginTop: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{flex: 1, width: '95%', marginRight: '-4%'}}
          onPress={() =>
            navigation.navigate('UnitDic', {name: 'Area', type: 'From'})
          }>
          <View
            style={{
              flex: 1,
              width: '95%',
              backgroundColor: '#1CAC78',
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextFrom
              upDateIdFrom={setFromId}
              upDateFromData={setFromData}
              upDateFromSubData={setFromSubData}
            />
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
          onPress={() =>
            navigation.navigate('UnitDic', {name: 'Area', type: 'To'})
          }>
          <View
            style={{
              flex: 1,
              width: '95%',
              backgroundColor: '#CA3767',
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextTo
              upDateIdTo={setToId}
              upDateToData={setToData}
              upDateToSubData={setToSubData}
            />
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
        <View style={{flex: 1, width: '95%', marginRight: '-4%'}}>
          <View
            style={{
              flex: 1,
              width: '95%',
              backgroundColor: '#D0D1B8',
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={{width: '95%', color: '#30789D', fontSize: 25}}
              allowFontScaling={false}
              numberOfLines={1}
              editable={fromId === -1 || toId === -1 ? false : true}
              keyboardType="decimal-pad"
              onFocus={() => {
                if (inputValue === 'Area') {
                  setInput('');
                }
              }}
              onChangeText={event => {
                setInput(event);
                setAnswer(0);
                if (inputValue !== 'Area') {
                  setAnswer(event);
                }
              }}
              value={inputValue}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.2,
          marginTop: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 1, width: '95%', marginRight: '-4%'}}>
          <View
            style={{
              flex: 1,
              width: '95%',
              backgroundColor: '#636E4D',
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FindingResalt
              IdTo={toId}
              ToData={toData}
              ToSubData={toSubData}
              IdFrom={fromId}
              FromData={fromData}
              FromSubData={fromSubData}
              updateAnswer={() => setAnswer}
              finalAnswer={answerValue}
            />
          </View>
        </View>
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
    return (
      <Text
        allowFontScaling={false}
        style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
        {' '}
        From :{route.params.nameF}
      </Text>
    );
  } else {
    return (
      <Text
        allowFontScaling={false}
        style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
        {' '}
        From{' '}
      </Text>
    );
  }
}

function TextTo(props) {
  const route = useRoute();
  if (route.params?.name) {
    props.upDateIdTo(route.params.id);
    props.upDateToData(route.params.data);
    props.upDateToSubData(route.params.subData);
    return (
      <Text
        allowFontScaling={false}
        style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
        {' '}
        To :{route.params.name}
      </Text>
    );
  } else {
    return (
      <Text
        allowFontScaling={false}
        style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
        {' '}
        To{' '}
      </Text>
    );
  }
}
function FindingResalt(props) {
  if (props.finalAnswer !== 0) {
    if (props.IdFrom === 1) {
      if (props.IdTo === 1) {
        return (
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{fontSize: 25, color: 'white'}}>
            {' '}
            {(props.finalAnswer * props.ToData * props.ToSubData) /
              (props.FromData * props.FromSubData)}
          </Text>
        );
      } else if (props.IdTo === 2) {
        return (
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{fontSize: 25, color: 'white'}}>
            {' '}
            {(props.finalAnswer *
              props.ToData *
              Math.pow(10, props.ToSubData)) /
              (props.FromData * props.FromSubData)}
          </Text>
        );
      }
    } else if (props.IdFrom === 2) {
      if (props.IdTo === 1) {
        return (
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{fontSize: 25, color: 'white'}}>
            {' '}
            {(props.finalAnswer * props.ToData * props.ToSubData) /
              (props.FromData * Math.pow(10, props.FromSubData))}
          </Text>
        );
      } else if (props.IdTo === 2) {
        return (
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{fontSize: 25, color: 'white'}}>
            {' '}
            {(props.finalAnswer *
              props.ToData *
              Math.pow(10, props.ToSubData)) /
              (props.FromData * Math.pow(10, props.FromSubData))}{' '}
          </Text>
        );
      }
    }
  } else
    return (
      <Text
        allowFontScaling={false}
        numberOfLines={1}
        style={{fontSize: 25, color: 'white'}}>
        {' '}
        waiting for your input{' '}
      </Text>
    );
}

export default Area;
