//Importing what we need for context
import { createContext, useState, useEffect} from "react";
import { ReactNode } from "react";
//Importing what we need to store user stuff on the device 
import AsyncStorage from "@react-native-async-storage/async-storage";

//Exporting the context // info 
//Creating it for first time to be used in provider

export const AuthContext = createContext(
  //default state
  {uid:'',
  isAuthenticated:false, 

  //Functions in this context
  authenticate: (uid:string) =>{}, 

  logout: () => {},

  loading: true});

//Place to manage the state and create a wrapper where auth can be accessed 

const AuthContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  //Loading or not stage (to prevent weird transition if logged in)

  const [loading, setLoading] = useState(true);

  //When initialized check to see if anything in storage
  useEffect(() => {
    //Get uid to see if anything
    async function fetchToken() {
      const storedUid = await AsyncStorage.getItem('uid');

      //If found one then set
      if (storedUid) {
        setUid(storedUid);
      }
      setLoading(false);
    }
    fetchToken();
  });

  //Manage token is empty bc starts w no token

  const [uid, setUid] = useState<string>('');

  //Authentication function
  const authenticate = (uid: string) => {
    //Setting token
    setUid(uid);
    //Store uid in device
    //Give token and item to store
    AsyncStorage.setItem('uid', uid);
  };

  //Log out function which sets the token to null
  const logout = () => {
    setUid('');
    //removing from storage;
    AsyncStorage.removeItem('uid');
  };

  //Thing that is passed down to everything in provider
  const value = {
    uid: uid,
    isAuthenticated: !!uid,
    //Pass in functions to be used too
    authenticate: authenticate,
    logout: logout,
    loading: loading,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;