//Need to create the stack navigator 
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Importing pages 
import SignUpLogInPage from '../pages/SignUpLogInPage';
import TripsFeedPage from "../pages/TripsFeedPage";
import CreateTripPage from "../pages/CreateTripPage";

//Creating type 
 export type RootStackParamList = {
    SignUpLogInPage: undefined,
    TripsFeedPage: undefined,
    CreateTripPage:undefined
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
      name="TripsFeedPage"
      component={TripsFeedPage}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CreateTripPage"
      component={CreateTripPage}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
};

export default Navigation; 

