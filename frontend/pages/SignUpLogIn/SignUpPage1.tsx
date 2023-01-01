import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import CenteredContainer from '../../components/CenteredContainer';
import BackButton from '../../components/BackButton';
import GenericButton1 from '../../components/GenericButton1';
import UnderlineInput from '../../components/UnderlineInput';
import AvenirText from '../../components/AvenirText';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigation';
import { SignUpContext } from '../../store/SignUpContext';


const SignUpPage1 : React.FC = () => {
//Adds navigation
type homeScreenProp = NativeStackNavigationProp<RootStackParamList>;
const navigation = useNavigation<homeScreenProp>();

//Create context
const SignUpCtx = useContext(SignUpContext);

//Creating state for message
const [message, setMessage] = useState<{words:string, styles:string|null}>({words:'',styles:null});

const GoBack = () => {
  navigation.navigate('SignUpLogInPage');
};

const goNext = () => {

  const name = SignUpCtx.name;

  if(name==''){
    setMessage({ words: 'Please Fill In A Name!', styles: null });

     setTimeout(() => {
      setMessage({ words: '', styles: null });
     }, 2500);

    return;
  }
  navigation.navigate('SignUpPage2');
};

return (
  <CenteredContainer>
    <BackButton onPress={GoBack} />
    <AvenirText style={styles.text} text="What's your full name?" />
    <UnderlineInput value={SignUpCtx.name} onChangeText={SignUpCtx.setName} placeholderTextColor="rgba(123, 123, 123, 1)" />
    {message.words!='' ? <AvenirText style={styles.text} text={message.words}/>: null}
    <GenericButton1 onPress={goNext} text="Next" light={true} />
  </CenteredContainer>
);};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingVertical: 10,
  },
});

export default SignUpPage1;
