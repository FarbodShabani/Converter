import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

const Bmi = () => {
  var useMetric = useState(true);
  var useMetricVal = useMetric[0];
  var setUseMetric = useMetric[1];

  var heightMetre = useState('Height in Metre');
  var heightMetreVal = heightMetre[0];
  var setHeightMetre = heightMetre[1];

  var heightInch = useState('Height in Inch');
  var heightInchVal = heightInch[0];
  var setHeightInch = heightInch[1];

  var heightFoot = useState('Height in Foot');
  var heightFootVal = heightFoot[0];
  var setHeightFoot = heightFoot[1];

  var weightKg = useState('Weight in Kg');
  var weightKgVal = weightKg[0];
  var setWeightKg = weightKg[1];

  var weightPound = useState('Weight in Pound');
  var weightPoundVal = weightPound[0];
  var setWeightPound = weightPound[1];

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.7,
          marginTop: '5%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{flex: 1, width: '95%', marginRight: '-4%'}}
          onPress={() => setUseMetric(!useMetricVal)}>
          <View
            style={{
              flex: 1,
              width: '95%',
              backgroundColor: useMetricVal ? '#30789D' : '#B24F60',
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <UnitSection whichUnit={useMetricVal} />
          </View>
        </TouchableOpacity>
        <HeightSection
          whichHeight={useMetricVal}
          metre={heightMetreVal}
          setMetre={setHeightMetre}
          inch={heightInchVal}
          setInch={setHeightInch}
          foot={heightFootVal}
          setFoot={setHeightFoot}
        />
        <WeightSection
          whichWeight={useMetricVal}
          kg={weightKgVal}
          setKg={setWeightKg}
          pound={weightPoundVal}
          setPound={setWeightPound}
        />
        <ResualtSection
          whichCal={useMetricVal}
          rMetre={heightMetreVal}
          rInch={heightInchVal}
          rFoot={heightFootVal}
          rKg={weightKgVal}
          rPound={weightPoundVal}
        />
      </View>
    </View>
  );
};
/* head Section */
function UnitSection(props) {
  if (props.whichUnit) {
    return (
      <Text
        allowFontScaling={false}
        style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
        Metric / Kg
      </Text>
    );
  } else {
    return (
      <Text
        allowFontScaling={false}
        style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
        Foot & Inch / Pound
      </Text>
    );
  }
}
/* Height Section */
function HeightSection(props) {
  if (props.whichHeight) {
    // metre
    return (
      <View
        style={{
          flex: 0.8,
          width: '92%',
          marginTop: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            width: '100%',
            backgroundColor: '#48B9B6',
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={{width: '95%', color: 'white', fontSize: 25}}
            allowFontScaling={false}
            numberOfLines={1}
            keyboardType="decimal-pad"
            onFocus={() => {
              if (props.metre === 'Height in Metre') {
                props.setMetre('');
              }
            }}
            onChangeText={event => {
              props.setMetre(event);
            }}
            value={props.metre}
          />
        </View>
      </View>
    );
  } else {
    // foot & inch
    return (
      <View
        style={{
          flex: 0.9,
          width: '80%',
          marginTop: '10%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            width: '40%',
            backgroundColor: '#B84543',
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '5%',
            marginLeft: '-5%',
          }}>
          <TextInput
            style={{width: '95%', color: 'white', fontSize: 20}}
            allowFontScaling={false}
            numberOfLines={1}
            keyboardType="decimal-pad"
            onFocus={() => {
              if (props.foot === 'Height in Foot') {
                props.setFoot('');
              }
            }}
            onChangeText={event => {
              props.setFoot(event);
            }}
            value={props.foot}
          />
        </View>
        <View
          style={{
            flex: 1,
            width: '40%',
            backgroundColor: '#B84543',
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '-5%',
          }}>
          <TextInput
            style={{width: '95%', color: 'white', fontSize: 20}}
            allowFontScaling={false}
            numberOfLines={1}
            keyboardType="decimal-pad"
            onFocus={() => {
              if (props.inch === 'Height in Inch') {
                props.setInch('');
              }
            }}
            onChangeText={event => {
              props.setInch(event);
            }}
            value={props.inch}
          />
        </View>
      </View>
    );
  }
}
/* Weight Section */
function WeightSection(props) {
  if (props.whichWeight) {
    // Kg
    return (
      <View
        style={{
          flex: 0.8,
          width: '92%',
          marginTop: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            width: '100%',
            backgroundColor: '#226774',
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={{width: '95%', color: 'white', fontSize: 25}}
            allowFontScaling={false}
            numberOfLines={1}
            keyboardType="decimal-pad"
            onFocus={() => {
              if (props.kg === 'Weight in Kg') {
                props.setKg('');
              }
            }}
            onChangeText={event => {
              props.setKg(event);
            }}
            value={props.kg}
          />
        </View>
      </View>
    );
  } else {
    // Pound
    return (
      <View
        style={{
          flex: 0.7,
          width: '92%',
          marginTop: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            width: '100%',
            backgroundColor: '#CA373A',
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={{width: '95%', color: 'white', fontSize: 25}}
            allowFontScaling={false}
            numberOfLines={1}
            keyboardType="decimal-pad"
            onFocus={() => {
              if (props.pound === 'Weight in Pound') {
                props.setPound('');
              }
            }}
            onChangeText={event => {
              props.setPound(event);
            }}
            value={props.pound}
          />
        </View>
      </View>
    );
  }
}
/* RrsualtSection */
function ResualtSection(props) {
  if (props.whichCal) {
    if (props.rMetre !== 'Height in Metre') {
      if (props.rKg !== 'Weight in Kg') {
        // Resualt for Metric
        return (
          <View
            style={{
              flex: 0.8,
              width: '92%',
              marginTop: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                width: '100%',
                backgroundColor: '#88b6AD',
                borderRadius: 35,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{width: '95%', color: 'white', fontSize: 25}}
                allowFontScaling={false}
                numberOfLines={1}>
                {props.rKg / (props.rMetre * props.rMetre)}
              </Text>
            </View>
          </View>
        );
      } else {
        return (
          <View
            style={{
              flex: 0.8,
              width: '92%',
              marginTop: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                width: '100%',
                backgroundColor: '#88b6AD',
                borderRadius: 35,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{width: '95%', color: 'white', fontSize: 25}}
                allowFontScaling={false}
                numberOfLines={1}>
                please write your Weight
              </Text>
            </View>
          </View>
        );
      }
    } else {
      return (
        <View
          style={{
            flex: 0.8,
            width: '92%',
            marginTop: '10%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: '#88b6AD',
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{width: '95%', color: 'white', fontSize: 25}}
              allowFontScaling={false}
              numberOfLines={1}>
              please Write your Height
            </Text>
          </View>
        </View>
      );
    }
  } else {
    if (props.rFoot !== 'Height in Foot') {
      if (props.rInch !== 'Height in Inch') {
        if (props.rPound !== 'Weight in Pound') {
          // Resualt for Foot&Inch&Pound
          return (
            <View
              style={{
                flex: 0.8,
                width: '92%',
                marginTop: '10%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  backgroundColor: '#E75B57',
                  borderRadius: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{width: '95%', color: 'white', fontSize: 25}}
                  allowFontScaling={false}
                  numberOfLines={1}>
                  {703 *
                    (props.rPound /
                      ((props.rFoot * 12 + props.rInch) *
                        (props.rFoot * 12 + props.rInch)))}
                </Text>
              </View>
            </View>
          );
        } else {
          return (
            <View
              style={{
                flex: 0.8,
                width: '92%',
                marginTop: '10%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  backgroundColor: '#E75B57',
                  borderRadius: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{width: '95%', color: 'white', fontSize: 25}}
                  allowFontScaling={false}
                  numberOfLines={1}>
                  please Write your Weight
                </Text>
              </View>
            </View>
          );
        }
      } else {
        return (
          <View
            style={{
              flex: 0.8,
              width: '92%',
              marginTop: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                width: '100%',
                backgroundColor: '#E75B57',
                borderRadius: 35,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{width: '95%', color: 'white', fontSize: 25}}
                allowFontScaling={false}
                numberOfLines={1}>
                please write your height (Inch)
              </Text>
            </View>
          </View>
        );
      }
    } else {
      return (
        <View
          style={{
            flex: 0.8,
            width: '92%',
            marginTop: '10%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: '#E75B57',
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{width: '95%', color: 'white', fontSize: 25}}
              allowFontScaling={false}
              numberOfLines={1}>
              please write your height (Foot)
            </Text>
          </View>
        </View>
      );
    }
  }
}
export default Bmi;
