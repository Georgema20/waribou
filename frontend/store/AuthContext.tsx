//Importing what we need for context
import { createContext, useState, useEffect} from "react";
import { ReactNode } from "react";
//Importing what we need to store user stuff on the device 
import AsyncStorage from "@react-native-async-storage/async-storage";
//Importing google sign in information 
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
//Importing in realms (which is needed for google sign in)
import Realm from 'realm';

GoogleSignin.configure();

//Initialize your App.
 const realmId = 'waribou-gqcyn';
 const app = new Realm.App({ id: realmId });

//Exporting the context // info 
//Creating it for first time to be used in provider

export const AuthContext = createContext(
  //Default state
  {
  isAuthenticated:false, 

  //Functions in this context
  authenticate: () =>{}, 

  logout: () => {},

  loading: true,

  uid: ''});

//Place to manage the state and create a wrapper where auth can be accessed 

const AuthContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  //Loading or not stage (to prevent weird transition if logged in)

  const [loading, setLoading] = useState(true);
  const [uid, setUid] = useState('');

  //When initialized check to see if anything in storage
  useEffect(() => {
    //Get uid to see if anything
    async function fetchToken() {
      const isLoggedIn = await AsyncStorage.getItem('loggedIn');

      //If found one then set
      if (isLoggedIn) {
        setLoggedIn(true);
      }
      setLoading(false);
    }
    fetchToken();
  });

  //Manage token is empty bc starts w no token

  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  //Authentication function
  const authenticate = async () => {


   const userInfo = await GoogleSignin.signIn().catch((error) => 
   {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) 
     {
      //User cancelled the login flow
      console.log('cancelled');
      return;
      }
    });
    //If no user information was grabbed 
   if (userInfo == null) 
    {
    return;
    }

   const realm = await Realm.open({});

   //Log the user in to your app
    const idToken: string = userInfo.idToken!;

    const credentials = await Realm.Credentials.google({ idToken });
   
    const user = app.logIn(credentials).then( async (user) => 
    {
    console.log(`Logged in with id: ${user.id}`);
    setUid(user.id);
    const allProducts = await user.functions.getAllProducts();
    console.log(allProducts);
    }).catch((error)=>{
      console.log(error);
    });

    //Setting loggedIn state to true 
    setLoggedIn(true);

    //Store that someone has been logged in 
    AsyncStorage.setItem('loggedIn', 'true');
  };

  //Log out function which sets the log in status to nonexistent 
  const logout = async () => {
   setLoggedIn(false);

    await GoogleSignin.signOut().then(()=>{
    }).catch((error)=>{console.error(error);});

    setUid('');
    //Removing from storage;
    AsyncStorage.removeItem('loggedIn');
   

  };

  //Thing that is passed down to everything in provider
  const value = {
    isAuthenticated: loggedIn,
    //Pass in functions to be used too
    authenticate: authenticate,
    logout: logout,
    loading: loading,
    uid: uid,
    
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;