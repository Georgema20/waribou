import { View, Text, StyleSheet} from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Realm from "realm";


const Tabs = () => {

    GoogleSignin.configure();
    
  // Initialize your App.
  const app = new Realm.App({
    id: 'waribou-gqcyn',
  });

  const signIn = async () => {
    const userInfo = await GoogleSignin.signIn();

    const realm = await Realm.open({
  
    });

    // Log the user in to your app
    const idToken: string = userInfo.idToken!;
       
    const credentials = await Realm.Credentials.google({ idToken });

    app.logIn(credentials).then((user) => {
    });
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <GoogleSigninButton onPress={signIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Tabs;