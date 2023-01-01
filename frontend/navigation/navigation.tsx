//Need to create the stack navigator 
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Importing pages 
import LogInPage from "../pages/SignUpLogIn/LogInPage";
import SignedInPage from '../pages/SignUpLogIn/SignedInPage';
import SignUpLogInPage from '../pages/SignUpLogIn/SignUpLogInPage';
import SignUpPage1 from "../pages/SignUpLogIn/SignUpPage1";
import SignUpPage2 from '../pages/SignUpLogIn/SignUpPage2';
import SignUpPage3 from '../pages/SignUpLogIn/SignUpPage3';
import SignUpPage4 from '../pages/SignUpLogIn/SignUpPage4';
import SignUpPage5 from '../pages/SignUpLogIn/SignUpPage5';

//Creating type 
 export type RootStackParamList = {
    SignUpLogInPage: undefined,
    LogInPage: undefined, 
    SignUpPage: undefined, 
    SignedInPage: undefined,
    SignUpPage1: undefined, 
    SignUpPage2: undefined, 
    SignUpPage3: undefined, 
    SignUpPage4: undefined, 
    SignUpPage5: undefined
  };

const Navigation = () =>{

//Creating navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

return (
  <Stack.Navigator>
    <Stack.Screen
      name="SignUpLogInPage"
      component={SignUpLogInPage}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="LogInPage"
      component={LogInPage}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignedInPage"
      component={SignedInPage}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignUpPage1"
      component={SignUpPage1}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignUpPage2"
      component={SignUpPage2}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignUpPage3"
      component={SignUpPage3}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignUpPage4"
      component={SignUpPage4}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignUpPage5"
      component={SignUpPage5}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
};

export default Navigation; 