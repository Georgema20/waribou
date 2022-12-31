import { StyleSheet, Text, View } from 'react-native';
import Realm from 'realm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import Confirming from './Confirming';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';


export default function App() {
  GoogleSignin.configure();

  const initialize = async () => {

   

    // //register user
    // const email = 'someone3@example.com';
    // const password = 'Pa55w0rd';
    // await app.emailPasswordAuth.registerUser({ email, password });
    // console.log('created');

    // const credentials1 = Realm.Credentials.anonymous();
    // try {
    //   const user = await app.logIn(credentials1);
    //   console.log('Successfully logged in!', user.id);
    //   return user;
    // } catch (err) {
    //   if (err instanceof Error) {
    //     console.error('Failed to log in', err.message);
    //   }
    // }

    // Create an email/password credential
    // const credentials2 = Realm.Credentials.emailPassword(
    //   'someone3@example.com',
    //   'Pa55w0r'
    // );
    // try {
    //   const user = await app.logIn(credentials2);
    //   console.log('Successfully logged in!', user.id);
    //   return user;
    // } catch (err) {
    //   if (err instanceof Error) {
    //     console.error('Failed to log in', err.message);
    //   }
    // }

      // const userInfo = await GoogleSignin.signIn();
      // console.log(userInfo);
  };

  initialize();

  const Stack = createStackNavigator();
  const linking = {
    prefixes: [
      'com.georgema001001.caribou://',
      'https://com.georgema001001.caribou',
    ],
    config: {
      screens: {
        Confirming: {
          path: 'Confirming/:token/:tokenId',
          parse: {
            token: (token: any) => `${token}`,
          },
        },
      },
    },
  };
//how to get url parameters 
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Confirming" component={Confirming} />
      </Stack.Navigator>
    </NavigationContainer>
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
