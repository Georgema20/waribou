import {  View, StyleSheet} from 'react-native';
import { useContext, useEffect} from 'react';
import { AuthContext } from '../../store/AuthContext';
import CenteredContainer from '../../components/CenteredContainer';
import AppLoading from 'expo-app-loading';
import GenericButton1 from '../../components/GenericButton1';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigation';

const SignUpLogInPage : React.FC  = () => {

  //Sets up navigation
  type homeScreenProp = NativeStackNavigationProp<
      RootStackParamList,
      'SignedInPage'
    >;

  const navigation = useNavigation<homeScreenProp>();

  //Create context
  const AuthCtx = useContext(AuthContext);

  //UseEffect -make logged in if already logged in
  useEffect(() => {
    if (AuthCtx.isAuthenticated) {
      navigation.navigate('SignedInPage');
    }
  });

  //Navigating to pages 
  const goToSignIn = () => 
  {
    navigation.navigate('SignUpPage1');
  }
  
  const goToLogIn = () => 
  {
    navigation.navigate('LogInPage');
  };
  

  return (
    <CenteredContainer>
      {AuthCtx.loading ? (
        <AppLoading />
      ) : (
        <View style={styles.container}>
          <GenericButton1 onPress={goToSignIn} text="Sign Up" light={false} />
          <GenericButton1 onPress={goToLogIn} text="Log In" light={true} />
        </View>
      )}
    </CenteredContainer>
  );
};


const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row'
  }
});

export default SignUpLogInPage;
