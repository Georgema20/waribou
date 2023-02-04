import {  View, StyleSheet} from 'react-native';
import { useContext, useEffect} from 'react';
import { AuthContext } from '../../store/AuthContext';
import CenteredContainer from '../../components/CenteredContainer';
import AppLoading from 'expo-app-loading';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigation';
import {
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

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
      navigation.navigate('TripsFeedPage');
    }
  });

  return (
    <CenteredContainer>
      {AuthCtx.loading ? (
        <AppLoading />
      ) : (
        <View style={styles.container}>
          <GoogleSigninButton onPress={AuthCtx.authenticate} />
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
