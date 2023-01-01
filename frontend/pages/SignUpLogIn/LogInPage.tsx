import { View, StyleSheet} from 'react-native';
import { useState, useContext, useEffect} from 'react';
// import firebaseLogIn from '../../../backend/FirebaseLogIn';
import { AuthContext } from '../../store/AuthContext';
import CenteredContainer from '../../components/CenteredContainer';
import GenericButton1 from '../../components/GenericButton1';
import BackButton from '../../components/BackButton';
import RectangleInputBox from '../../components/RectangleInputBox';
import { RootStackParamList } from '../../navigation/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AvenirText from '../../components/AvenirText';
import { useNavigation } from '@react-navigation/native';
import { SignUpContext } from '../../store/SignUpContext';


const LogInPage : React.FC = () => {

  //Create navigation bc component and not page that is being displayed on app

  type homeScreenProp = NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<homeScreenProp>();

  //Mounted (to prevent memoryleaks and warnings)

  const [isMounted, setIsMounted] = useState(true);

  //Create context
  const AuthCtx = useContext(AuthContext);
  const SignUpCtx = useContext(SignUpContext);

  //UseEffect -make logged in if already logged in
  useEffect(() => {
    if (AuthCtx.isAuthenticated) {
      navigation.navigate('SignedInPage');
    }
  });

  //Creating state for log in text inputs
  const [logInState, setLogInState] = useState({ email: '', password: '' });

  //Creating state for message
  const [message, setMessage] = useState<{
    words: string | null;
    styles: string | null;
  }>({ words: null, styles: null });

  //Function that handles log in
  const LogInHandler = async () => {
    console.log('Logging In');
    //if there is something in both boxes
//   if (!logInState.email || !logInState.password) 
//   {
//     setMessage({ words: 'Fill all inputs', styles: null });
//     setTimeout(() => {
//       if (isMounted) {
//         setMessage({ words: null, styles: null });
//       }
//     }, 2500);
//     return;
//   }

//   const response = await firebaseLogIn(logInState.email, logInState.password);

//   if (response.message === 'success') {
//     //Authenticating in ctx
//     AuthCtx.authenticate(response.data!.uid);
//     //Clearing out everything
//     setLogInState({ email: '', password: '' });
//     SignUpCtx.clearAll();
//   }
//   //Error case
//   else {
//     setMessage({ words: response.message, styles: null });
//   }
//   //Reset message
//   setTimeout(() => {
//     if (isMounted) {
//       setMessage({ words: null, styles: null });
//     }
//   }, 2500);
};

  const GoBack = () => {
    navigation.navigate('SignUpLogInPage');
  };

  return (
    <CenteredContainer>
      <BackButton onPress={GoBack} />
      <RectangleInputBox
        placeholder="Email"
        value={logInState.email}
        placeholderTextColor="rgba(123, 123, 123, 1)"
        onChange={(address) => {
          setLogInState({ ...logInState, email: address });
        }}
      />
      <RectangleInputBox
        placeholder="Password"
        value={logInState.password}
        placeholderTextColor="rgba(123, 123, 123, 1)"
        onChange={(passwd) => {
          setLogInState({ ...logInState, password: passwd });
        }}
      secured={true}
      />
      <View>
        {message.words ? (
          <AvenirText style={styles.text} text={message.words} />
        ) : null}
      </View>
      <GenericButton1 onPress={LogInHandler} text="Log In" light={false} />
    </CenteredContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingVertical: 10,
  },
});

export default LogInPage;
