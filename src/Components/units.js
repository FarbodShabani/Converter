import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Units = props => {
  const navigation = useNavigation();
  /* weight starts here */
  if (props.kind === 'Weight') {
    if (props.type === 'From') {
      return (
        <View style={{flex: 1, backgroundColor: '#ECF0F1'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Gramme',
                dataF: 1,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Gramme
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'MilliGramme',
                dataF: 1000,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                MilliGramme
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'KiloGramme',
                dataF: 0.001,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                KiloGramme
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Metric Ton',
                dataF: 0.000001,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Metric Ton
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Long Ton',
                dataF: 0.00000001,
                subDataF: 9.84,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Long Ton
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Short Ton',
                dataF: 0.0000001,
                subDataF: 1.1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Short Ton
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Pound',
                dataF: 0.0021,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Pound
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Ounce',
                dataF: 0.0352,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Ounce
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Carat',
                dataF: 5,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Carat
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Atomic Mass Unit',
                dataF: 6.02,
                subDataF: 23,
                idF: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Atomic Mass Unit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else if (props.type === 'To') {
      return (
        <View style={{flex: 1, backgroundColor: '#ECF0F1'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Gramme',
                data: 1,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Gramme
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'MilliGramme',
                data: 1000,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                MilliGramme
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'KiloGramme',
                data: 0.001,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                KiloGramme
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Metric Ton',
                data: 0.000001,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Metric Ton
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Long Ton',
                data: 0.00000001,
                subData: 9.84,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Long Ton
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Short Ton',
                data: 0.0000001,
                subData: 1.1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Short Ton
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Pound',
                data: 0.0021,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Pound
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Ounce',
                data: 0.0352,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Ounce
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Carat',
                data: 5,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Carat
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Atomic Mass Unit',
                data: 6.02,
                subData: 23,
                id: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Atomic Mass Unit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
  /* weight ends here */
  /* Volume starts here */
  if (props.kind === 'Volume') {
    if (props.type === 'From') {
      return (
        <View style={{flex: 1, backgroundColor: '#ECF0F1'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Cubic Metre',
                dataF: 1,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Cubic Metre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Cubic KiloMetre',
                dataF: 1,
                subDataF: -9,
                idF: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Cubic KiloMetre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Cubic CentiMetre',
                dataF: 100000,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Cubic CentiMetre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Cubic MilliMetre',
                dataF: 1,
                subDataF: 9,
                idF: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Cubic MilliMetric
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Litre',
                dataF: 1000,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Litre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'MilliLitre',
                dataF: 100000,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Milli Litre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'US Gallon',
                dataF: 264.17,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                US Gallon
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'US Quart',
                dataF: 1056.68,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                US Quart
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'US Pint',
                dataF: 2113.37,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Us Pint
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'US Cup',
                dataF: 4226.75,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Us Cup
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'US Fluid Ouance',
                dataF: 33814.03,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Us Fluid Ouance
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'US Table Spoon',
                dataF: 56312.12,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Us Table Spoon
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'US Tea Spoon',
                dataF: 168936.38,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Us Tea Spoon
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Cubic Mile',
                dataF: 2.39,
                subDataF: -10,
                idF: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Cubic Mile
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Cubic yard',
                dataF: 1.3,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Cubic Yard
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Cubic Foot',
                dataF: 35.31,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Cubic Foot
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Cubic Inch',
                dataF: 610223.74,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Cubic Inch
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else if (props.type === 'To') {
      return (
        <View style={{flex: 1, backgroundColor: '#ECF0F1'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Cubic Metre',
                data: 1,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Cubic Metre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Cubic KiloMetre',
                data: 1,
                subData: -9,
                id: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Cubic KiloMetre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Cubic CentiMetre',
                data: 100000,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Cubic CentiMetre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Cubic MilliMetre',
                data: 1,
                subData: 9,
                id: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Cubic MilliMetric
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Litre',
                data: 1000,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Litre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'MilliLitre',
                data: 100000,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Milli Litre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'US Gallon',
                data: 264.17,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                US Gallon
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'US Quart',
                data: 1056.68,
                subDataF: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                US Quart
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'US Pint',
                data: 2113.37,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Us Pint
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'US Cup',
                data: 4226.75,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Us Cup
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'US Fluid Ouance',
                data: 33814.03,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Us Fluid Ouance
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'US Table Spoon',
                data: 56312.12,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Us Table Spoon
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'US Tea Spoon',
                data: 168936.38,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Us Tea Spoon
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Cubic Mile',
                data: 2.39,
                subData: -10,
                id: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Cubic Mile
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Cubic yard',
                data: 1.3,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Cubic Yard
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Cubic Foot',
                data: 35.31,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Cubic Foot
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Cubic Inch',
                data: 610223.74,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Cubic Inch
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
  /* Volume ends here */
  /* Length starts here */
  if (props.kind === 'Length') {
    if (props.type === 'From') {
      return (
        <View style={{flex: 1, backgroundColor: '#ECF0F1'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Metre',
                dataF: 1,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Metre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'KiloMetre',
                dataF: 0.001,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                KiloMetre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'MilliMetre',
                dataF: 1000,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                MilliMetre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Micro Metre',
                dataF: 100000,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Micro Metre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Nano Metre',
                dataF: 1,
                subDataF: 9,
                idF: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Nano Metre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Mile',
                dataF: 6.2,
                subDataF: -4,
                idF: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Mile
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Yard',
                dataF: 1.9,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Yard
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Foot',
                dataF: 3.28084,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Foot
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Inch',
                dataF: 31.3701,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Inch
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Light Year',
                dataF: 1.05,
                subDataF: -16,
                idF: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Light Year
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else if (props.type === 'To') {
      return (
        <View style={{flex: 1, backgroundColor: '#ECF0F1'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Metre',
                data: 1,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Metre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'KiloMetre',
                data: 0.001,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                KiloMetre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'MilliMetre',
                data: 1000,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                MilliMetre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Micro Metre',
                data: 100000,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Micro Metre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Nano Metre',
                data: 1,
                subData: 9,
                id: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Nano Metre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Mile',
                data: 6.2,
                subData: -4,
                id: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Mile
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Yard',
                data: 1.9,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Yard
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Foot',
                data: 3.28084,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Foot
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Inch',
                data: 31.3701,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Inch
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Light Year',
                data: 1.05,
                subData: -16,
                id: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Light Year
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
  /* Length ends here */
  /* Area starts here */
  if (props.kind === 'Area') {
    if (props.type === 'From') {
      return (
        <View style={{flex: 1, backgroundColor: '#ECF0F1'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Square Metre',
                dataF: 1,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square Metre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Square KiloMetre',
                dataF: 1,
                subDataF: -6,
                idF: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square KiloMetre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Square MilliMetre',
                dataF: 100000,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square MilliMetre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Square Micro Metre',
                dataF: 1,
                subDataF: 12,
                idF: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square Micro Metre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Square CentiMetre',
                dataF: 1,
                subDataF: 4,
                idF: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square CentiMetre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Square HectoMetre',
                dataF: 1,
                subDataF: -4,
                idF: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square HectoMetre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Square Yard',
                dataF: 1.19,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square Yard
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Square Foot',
                dataF: 10.76,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square Foot
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Square Inch',
                dataF: 1550,
                subDataF: 1,
                idF: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square Inch
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                nameF: 'Acre',
                dataF: 2.47,
                subDataF: -4,
                idF: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Acre
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else if (props.type === 'To') {
      return (
        <View style={{flex: 1, backgroundColor: '#ECF0F1'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Square Metre',
                data: 1,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square Metre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Square KiloMetre',
                data: 1,
                subData: -6,
                id: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square KiloMetre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Square MilliMetre',
                data: 100000,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square MilliMetre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Square Micro Metre',
                data: 1,
                subData: 12,
                id: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square Micro Metre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Square CentiMetre',
                data: 1,
                subData: 4,
                id: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square CentiMetre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Square HectoMetre',
                data: 1,
                subData: -4,
                id: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square HectoMetre
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Square Yard',
                data: 1.19,
                subData: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square Yard
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Square Foot',
                date: 10.76,
                subDate: 1,
                i: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square Foot
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Square Inch',
                date: 1550,
                subDat: 1,
                id: 1,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Square Inch
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(props.kind, {
                name: 'Acre',
                date: 2.47,
                subDat: -4,
                id: 2,
              })
            }>
            <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 30, marginLeft: '5%', color: '#6E5160'}}>
                Acre
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
  /* Area ends here */
};
export default Units;
