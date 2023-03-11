//Importing what we need for context
import { createContext, useState, useEffect } from 'react';
import { ReactNode } from 'react';
import { trip } from '../../models/models';
//Importing google sign in information
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
//Importing in realms (which is needed for google sign in)
import Realm from 'realm';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

//Initialize your App.
const realmId = 'waribou-gqcyn';
const app = new Realm.App({ id: realmId });

//Exporting the context // info
//Creating it for first time to be used in provider

export const TripContext = createContext(
  //Default state
  {
   createTrip: (trip:trip) => {
   },
   tripsData: [{ title: '', date: {start: new Date(), end: new Date()}, uri:'', size: 0, place:'',owner:''}],
   loading: false
  }
);

//Place to manage the state and create a wrapper where auth can be accessed

const TripContextProvider: React.FC<{ children: ReactNode }> = (props) => {

  //States 
  const [idToken, setIdToken] = useState('');
  const [tripsData, setTripsData] = useState<Array<trip>>([]);
  const [loading, setLoading] = useState(false);
  const [needToReload, setNeedToReload] = useState(false);

  const AuthCtx = useContext(AuthContext);
  //When initialized check to see if anything in storage
  useEffect(() => {
    console.log('running4');
    setLoading(true);

    async function fetchTokenAndGetTrips() {

      console.log('1');
      const isSignedIn = await GoogleSignin.isSignedIn();

      //If found one then set
      if (isSignedIn) {
          console.log('2');
        //Sign into whatever is signed in with google
        await GoogleSignin.signInSilently();
          console.log('3');
        const currentUser = await GoogleSignin.getCurrentUser();

        //Log the user in to your app
        const idToken: string = currentUser!.idToken!;
     
        //save this idToken 
        setIdToken(idToken);

        const credentials = await Realm.Credentials.google({ idToken });

   
      await app
    .logIn(credentials)
    .then(async (user) => {
      //get user information
        console.log('7');
      let waribouUser = await user.functions.findWaribouUser({
        _id: user.id,
      });

      let trips:trip[] = [];

      const tripIdArray = waribouUser.trips;

       tripIdArray.forEach(async (element:string, i :number, tripIdArray : trip[]) => {
        const trip = await user.functions.findWaribouTrip(element);
        
        trips.push(trip.trip);

        if(i==tripIdArray.length-1){
          console.log(i);
          if(tripIdArray.length!=tripsData.length){
            console.log(trips.length);
            console.log(tripsData.length);
            console.log('shoudl hit once');
         setTripsData(trips);}
        }
      });
   })}}

    //run functions
    fetchTokenAndGetTrips();

    setLoading(false);
  }, [needToReload, AuthCtx.loading]);

  const createTrip = async (trip: trip) => {

    const credentials = await Realm.Credentials.google({ idToken });

     await app
       .logIn(credentials)
       .then(async (user) => {

      
        //add trip to trip collection 
          let waribouTripObject = await user.functions.createWaribouTrip({
          UserId: user.id,
          trip: trip
          });

         const tripId =waribouTripObject.insertedId.toString();

        await user.functions.addWaribouTripToWaribouUserTrips(user.id,tripId)


        //find user and add it to their array 
        
       })
       .catch((error) => {
         console.log(error);
       });

       setNeedToReload(!needToReload);
  };



  //Thing that is passed down to everything in provider
  const value = {
    createTrip: createTrip,
    tripsData: tripsData,
    loading: loading
  }
   

  return (
    <TripContext.Provider value={value}>{props.children}</TripContext.Provider>
  );
};

export default TripContextProvider;
