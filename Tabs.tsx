import { View, Text, StyleSheet} from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Realm from "realm";


const Tabs = () => {
  // Initialize your App.
  const app = new Realm.App({
    id: 'waribou-gqcyn',
  });

  const signIn = async () => {
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);
    console.log('hi');

    const realm = await Realm.open({
  
    });

    // Log the user in to your app
    const idToken: string = userInfo.idToken!;
       console.log(idToken);
       
    const credentials = await Realm.Credentials.google({ idToken });
        console.log(credentials);

    app.logIn(credentials).then((user) => {
      console.log(`Logged in with id: ${user.id}`);
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