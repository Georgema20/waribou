import { StyleSheet} from 'react-native';
import { useState } from 'react';
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
// import FirestoreCheckIfUserExists from '../../../backend/FirestoreCheckIfUserExists';

const SignUpPage3 : React.FC = () => {

  //Adds navigation
  type homeScreenProp = NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<homeScreenProp>();

  //Create context
  const SignUpCtx = useContext(SignUpContext);

  //Creating state for message
  const [message, setMessage] = useState<{
  words: string;
  styles: string | null;}>({ words: '', styles: null });


  const GoBack = () => {
    navigation.navigate('SignUpPage2');
  };

  const goNext = async () => {
    // const username = SignUpCtx.username;

    // if (username == '') {
    //   setMessage({ words: 'Please Fill In A Username!', styles: null });

    //   setTimeout(() => {
    //     setMessage({ words: '', styles: null });
    //   }, 2500);

    //   return;
    // }
    
    // //Need check if username is taken 
    // const exist = await FirestoreCheckIfUserExists(SignUpCtx.username);

    // if(exist){
    //   setMessage({ words: 'This Username Is Taken!', styles: null });

    //   setTimeout(() => {
    //     setMessage({ words: '', styles: null });
    //   }, 2500);

    //   return;
    // };
    navigation.navigate('SignUpPage4');
  };

  return (
    <CenteredContainer>
      <BackButton onPress={GoBack} />
      <AvenirText style={styles.text} text="Choose a username:" />
      <DetailInput
        placeholderTextColor="rgba(123, 123, 123, 1)"
        value={SignUpCtx.username}
        onChangeText={SignUpCtx.setUsername}
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
    paddingVertical: 10,
  },
});

export default SignUpPage3;
