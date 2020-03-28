import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Units = props => {
  const navigation = useNavigation();
  /* weight */
  if (props.kind === 'Weight') {
    if (props.type === 'From') {
    return(
      <View style={{flex: 1, backgroundColor: '#ECF0F1'}}>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {nameF: 'Gramme', dataF: 1, subDataF: 1, idF:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        Gramme
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {nameF: 'MilliGramme', dataF: 1000, subDataF: 1, idF:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        MilliGramme
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {nameF: 'KiloGramme', dataF: 0.001, subDataF: 1, idF:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        KiloGramme
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {nameF: 'Metric Ton', dataF: 0.000001, subDataF: 1, idF:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        Metric Ton
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {nameF: 'Long Ton', dataF: 0.00000001, subDataF: 9.84, idF:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        Long Ton
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {nameF: 'Short Ton', dataF: 0.0000001, subDataF: 1.1, idF:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        Short Ton
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {nameF: 'Pound', dataF: 0.0021, subDataF: 1, id:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        Pound
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {nameF: 'Ounce', dataF: 0.0352, subDataF: 1, idF:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        Ounce
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {nameF: 'Carat', dataF: 5, subDataF: 1, idF:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        Carat
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {nameF: 'Atomic Mass Unit', dataF: 6.02, subDataF: 23, idF:2})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        Atomic Mass Unit
      </Text>
      </View>
      </TouchableOpacity>
      </View>
    );}
    else if (props.type === 'To') {
      return(
      <View style={{flex: 1, backgroundColor: '#ECF0F1'}}>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {name: 'Gramme', data: 1, subData: 1, id:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        Gramme
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {name: 'MilliGramme', data: 1000, subData: 1, id:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        MilliGramme
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {name: 'KiloGramme', data: 0.001, subData: 1, id:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        KiloGramme
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {name: 'Metric Ton', data: 0.000001, subData: 1, id:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        Metric Ton
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {name: 'Long Ton', data: 0.00000001, subData: 9.84, id:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        Long Ton
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {name: 'Short Ton', data: 0.0000001, subData: 1.1, id:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        Short Ton
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {name: 'Pound', data: 0.0021, subData: 1, id:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        Pound
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {name: 'Ounce', data: 0.0352, subData: 1, id:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        Ounce
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {name: 'Carat', data: 5, subData: 1, id:1})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        Carat
      </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(props.kind, {name: 'Atomic Mass Unit', data: 6.02, subData: 23, id:2})}>
      <View style={{justifyContent: "center", paddingBottom: '10%'}}>
      <Text allowFontScaling={false} style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}} >
        Atomic Mass Unit
      </Text>
      </View>
      </TouchableOpacity>
      </View>
    );
    }
  } else {
    return;
  }
};
export default Units;
