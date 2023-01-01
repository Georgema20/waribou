import {StyleSheet} from 'react-native';
import { useState } from 'react';
import React from 'react';
import CenteredContainer from '../../components/CenteredContainer';
import BackButton from '../../components/BackButton';
import GenericButton1 from '../../components/GenericButton1';
import AvenirText from '../../components/AvenirText';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigation';
import DateInput from '../../components/DateInput';

const SignUpPage2 : React.FC = () => {

  //Adds navigation
  type homeScreenProp = NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<homeScreenProp>();

  const GoBack = () => {
    navigation.navigate('SignUpPage1');
  };

  const goNext = () => {
    navigation.navigate('SignUpPage3');
  };

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <CenteredContainer>
      <BackButton onPress={GoBack} />
      <AvenirText style={styles.text} text="When's your birthday?" />
      <DateInput selectedDate={selectedDate} onChange={setSelectedDate}/>
      <GenericButton1 onPress={goNext} text="Next" light={true} />
    </CenteredContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingVertical: 10,
  },
});

export default SignUpPage2;
