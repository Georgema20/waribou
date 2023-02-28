//Importing what we need for context
import { createContext, useState, useEffect } from 'react';
import { ReactNode } from 'react';
//Importing google sign in information
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
//Importing in realms (which is needed for google sign in)
import Realm from 'realm';
import { trip } from '../../models/models';

//Initialize your App.
const realmId = 'waribou-gqcyn';
const app = new Realm.App({ id: realmId });

//Exporting the context // info
//Creating it for first time to be used in provider

export const TripContext = createContext(
  //Default state
  {
   createTrip: (trip:trip) => {
   }
  }
);

//Place to manage the state and create a wrapper where auth can be accessed

const TripContextProvider: React.FC<{ children: ReactNode }> = (props) => {

  //States 
  const [idToken, setIdToken] = useState('');

  //When initialized check to see if anything in storage
  useEffect(() => {
    //Get uid to see if anything
    async function fetchToken() {
      const isSignedIn = await GoogleSignin.isSignedIn();

      //If found one then set
      if (isSignedIn) {
        //Sign into whatever is signed in with google
        await GoogleSignin.signInSilently();
        const currentUser = await GoogleSignin.getCurrentUser();

        //Log the user in to your app
        const idToken: string = currentUser!.idToken!;
     
        //save this idToken 
        setIdToken(idToken);
      }
    }

    fetchToken();
  }, [idToken]);

  const createTrip = async (trip: trip) => {

    const credentials = await Realm.Credentials.google({ idToken });

     await app
       .logIn(credentials)
       .then(async (user) => {

        //add trip to trip collection 
        //add trip id to user trip array 
          const waribouTrip = await user.functions.createWaribouTrip({
          UserId: user.id,
          trip: trip
          });
          console.log(waribouTrip);
       })
       .catch((error) => {
         console.log(error);
       });
  };



  //Thing that is passed down to everything in provider
  const value = {
    createTrip: createTrip
  }
   

  return (
    <TripContext.Provider value={value}>{props.children}</TripContext.Provider>
  );
};

export default TripContextProvider;
