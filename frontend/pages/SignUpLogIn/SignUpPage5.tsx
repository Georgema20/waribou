import { StyleSheet } from 'react-native';
import { useState } from 'react';
// import firebaseSignIn from '../../../backend/FirebaseSignIn';
import React, { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';
import CenteredContainer from '../../components/CenteredContainer';
import BackButton from '../../components/BackButton';
import GenericButton1 from '../../components/GenericButton1';
import DetailInput from '../../components/DetailInput';
import AvenirText from '../../components/AvenirText';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigation';
import { SignUpContext } from '../../store/SignUpContext';

const SignUpPage5 : React.FC = () => {

  //Adds navigation
  type homeScreenProp = NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<homeScreenProp>();

  //Create context
  const AuthCtx = useContext(AuthContext);
  const SignUpCtx = useContext(SignUpContext);

  //Creating state for message
  const [message, setMessage] = useState<{
    words: string;
    styles: string | null;
  }>({ words: '', styles: null });

  const GoBack = () => {
    navigation.navigate('SignUpPage4');
  };

    //Function that handles sign ups
  const SignUpHandler = async () => {
    console.log('signed in');
    // const email = SignUpCtx.email;

    // if (email == '') {
    //   setMessage({ words: 'Please Fill In An Email!', styles: null });

    //   setTimeout(() => {
    //     setMessage({ words: '', styles: null });
    //   }, 2500);

    //   return;
    // }

    // if (!email.includes('@')) {
    //   setMessage({ words: 'Please put in a valid email!', styles: null });

    //   setTimeout(() => {
    //     setMessage({ words: '', styles: null });
    //   }, 2500);}

    //   const response = await firebaseSignIn(
    //     SignUpCtx.name,
    //     SignUpCtx.username,
    //     SignUpCtx.email,
    //     SignUpCtx.password,
    //     SignUpCtx.birthday
    //   );

    //   //Success case
    //   if (response.message === 'success') {
    //     //Authenticating in ctx
    //     AuthCtx.authenticate(response.data!.uid);
    //     //Clearing out everything
    //     setMessage({ words: 'Success', styles: null });
    //     SignUpCtx.clearAll();

    //     //navigate to signed in
    //     navigation.navigate('SignedInPage');
    //   }
    //   //Error case
    //   else {
    //     setMessage({ words: response.message + '!', styles: null });
    //   //Reset message
    //   setTimeout(() => {
    //     setMessage({ words: '', styles: null });
    //   }, 2500);
    //     };
    //   return;
    }

  return (
    <CenteredContainer>
      <BackButton onPress={GoBack} />
      <AvenirText style={styles.text} text="Last thing: what's your email?" />
      <DetailInput
        placeholderTextColor="rgba(123, 123, 123, 1)"
        value={SignUpCtx.email}
        onChangeText={SignUpCtx.setEmail}
      />
      {message.words != '' ? (
        <AvenirText style={styles.text} text={message.words} />
      ) : null}
      <GenericButton1 onPress={SignUpHandler} text="Sign Up" light={false} />
    </CenteredContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingVertical: 10,
  },
});

export default SignUpPage5;
