import { StyleSheet } from 'react-native';
import { useState } from 'react';
import React, { useContext } from 'react';
import CenteredContainer from '../../components/CenteredContainer';
import BackButton from '../../components/BackButton';
import RectangleInputBox from '../../components/RectangleInputBox';
import GenericButton1 from '../../components/GenericButton1';
import AvenirText from '../../components/AvenirText';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigation';
import { SignUpContext } from '../../store/SignUpContext';

const SignUpPage4 : React.FC = () => {

  //Adds navigation
  type homeScreenProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<homeScreenProp>();

  //Create context
  const SignUpCtx = useContext(SignUpContext);

  //Creating state for message
  const [message, setMessage] = useState<{
  words: string;
  styles: string | null;
  }>({ words: '', styles: null });

  //Create state for confirm password
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  //Function that handles go next
  const goNext = async () => {
    //Check to see if passwords both filled
    if (confirmPassword == '' || SignUpCtx.password == '') {
      setMessage({ words: 'Fill In Both Inputs!', styles: null });
      return;
    }

    //Check to see if password is shorter than 8 things
    else if (SignUpCtx.password.length < 8) {
      setMessage({ words: 'Make sure your password is longer!', styles: null });
       setTimeout(() => {
         setMessage({ words: '', styles: null });
       }, 2500);
      return;
    }

    //Check to see if pass is same
    else if (SignUpCtx.password !== confirmPassword) {
      setMessage({ words: 'Passwords are not the same!', styles: null });
       setTimeout(() => {
         setMessage({ words: '', styles: null });
       }, 2500);
      return;
    }
    
    navigation.navigate('SignUpPage5');
  };

  const GoBack = () => {
    navigation.navigate('SignUpPage3');
  };

  return (
    <CenteredContainer>
      <BackButton onPress={GoBack} />
      <AvenirText style={styles.text} text="Choose a password:" />
      <RectangleInputBox
        placeholder="Password"
        placeholderTextColor="rgba(123, 123, 123, 1)"
        value={SignUpCtx.password}
        onChange={SignUpCtx.setPassword}
        secured={true}
      />
      <RectangleInputBox
        placeholder="Confirm Password"
        placeholderTextColor="rgba(123, 123, 123, 1)"
        value={confirmPassword}
        onChange={setConfirmPassword}
        secured={true}
      />
      {message.words != '' ? (
        <AvenirText style={styles.text} text={message.words} />
      ) : null}
      <GenericButton1 onPress={goNext} text="Next" light={true} />
    </CenteredContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingVertical:10
  },
});

export default SignUpPage4;
