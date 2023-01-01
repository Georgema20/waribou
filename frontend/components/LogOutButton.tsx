import { AuthContext } from '../store/AuthContext';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AvenirText from './AvenirText';
import { RootStackParamList } from '../navigation/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const LogOutButton : React.FC = () => {
  //Create navigation bc component and not page that is being displayed on app

  type homeScreenProp = NativeStackNavigationProp<
    RootStackParamList,
    'LogInPage'
  >;

  const navigation = useNavigation<homeScreenProp>();

  //Create context
  const ctx = useContext(AuthContext);

  //Log out function
  function LogOutHandler() {
    ctx.logout();
    navigation.navigate('LogInPage');
  }

  return <AvenirText onPress={LogOutHandler} text="Sign Out" />;
}

export default LogOutButton;