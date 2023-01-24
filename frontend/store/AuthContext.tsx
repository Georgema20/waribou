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

  user: {name:''},

  //Functions in this context
  authenticate: () =>{}, 

  logout: () => {},

  loading: true,

  uid: '',});

//Place to manage the state and create a wrapper where auth can be accessed 

const AuthContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  //Loading or not stage (to prevent weird transition if logged in)

  const [loading, setLoading] = useState(true);
  const [uid, setUid] = useState('');
  const [user, setUser] = useState({ name: '' });
  
  //Manage token is empty bc starts w no token

  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  //When initialized check to see if anything in storage
  useEffect(() => {
    //Get uid to see if anything
    async function fetchToken() {
      const isSignedIn = await GoogleSignin.isSignedIn();
      console.log(isSignedIn);
      //If found one then set
      if (isSignedIn) {
        setLoggedIn(true);
        const userInfo = await GoogleSignin.signInSilently();
        const currentUser = await GoogleSignin.getCurrentUser();
        console.log(currentUser);
        //Log the user in to your app
        const idToken: string = currentUser!.idToken!;

        const credentials = await Realm.Credentials.google({ idToken });

        await app
          .logIn(credentials)
          .then(async (user) => {
            console.log(`Logged in with id: ${user.id}`);
            setUid(user.id);

            //Find user
            const waribouUser = await user.functions.findWaribouUser({
              _id: user.id,
            });

            //If found
            setUser(waribouUser);
            console.log(waribouUser);

            //Store that someone has been logged in
            AsyncStorage.setItem('id', waribouUser._id);

            return user;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setLoggedIn(false);
      }

      setLoading(false);
    }

    fetchToken();
  }, [loggedIn]);

  //Authentication function
  const authenticate = async () => {
    const userInfo = await GoogleSignin.signIn().catch((error) => {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //User cancelled the login flow
        console.log('cancelled');
        return;
      }
    });
    //If no user information was grabbed
    if (userInfo == null) {
      return;
    }

    console.log(userInfo);

    const realm = await Realm.open({});

    //Log the user in to your app
    const idToken: string = userInfo.idToken!;

    const credentials = await Realm.Credentials.google({ idToken });

    await app
      .logIn(credentials)
      .then(async (user) => {
        console.log(`Logged in with id: ${user.id}`);
        setUid(user.id);

        //Find user
        const waribouUser = await user.functions.findWaribouUser({
          _id: user.id,
        });

        if (waribouUser == null) {
          //Add user if not added
          await user.functions.addWaribouUser({
            _id: user.id,
            name: userInfo.user.name,
            email: userInfo.user.email,
            photo: userInfo.user.photo,
          });

          const waribouUser = await user.functions.findWaribouUser({
            _id: user.id,
          });

          setUser(waribouUser);
          console.log(waribouUser);
        } else {
          //If found
          setUser(waribouUser);
          console.log(waribouUser);
        }

        //Store that someone has been logged in
        AsyncStorage.setItem('id', waribouUser._id);

        return user;
      })
      .catch((error) => {
        console.log(error);
      });

    //Setting loggedIn state to true
    setLoggedIn(true);
  };

  //Log out function which sets the log in status to nonexistent
  const logout = async () => {
    setLoggedIn(false);
    //Removing from storage;
    AsyncStorage.removeItem('id');
    setUid('');

    await GoogleSignin.signOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  //Thing that is passed down to everything in provider
  const value = {
    isAuthenticated: loggedIn,
    //Pass in functions to be used too
    authenticate: authenticate,
    logout: logout,
    loading: loading,
    uid: uid,
    user: user,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;