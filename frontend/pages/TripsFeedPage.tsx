import React from "react";
import { FlatList, StyleSheet, SafeAreaView,TouchableOpacity, ListRenderItemInfo} from "react-native";
import AvenirText from "../components/AvenirText";
import TripOverview from "../components/TripOverview";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useContext } from "react";
import { TripContext } from "../store/TripContext";
import { trip } from "../../models/models";
import Icon from 'react-native-vector-icons/FontAwesome';

const TripsFeedPage : React.FC  = () => {
  //Adds navigation
  type homeScreenProp = NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<homeScreenProp>();

  const navigateToCreateTripPage = () => {
    navigation.navigate('CreateTripPage');
  };

  const TripCtx = useContext(TripContext);
  //use state for data 
  //useEffect set the data. if data not set it loading. 
    //only way to make it run again is if data changes 
    //need to keep data I think in the trips context 

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <AvenirText text="Trips" style={styles.headers} />
      <TouchableOpacity
        style={styles.addTripCornerButtonContainer}
        onPress={navigateToCreateTripPage}
      >
        <AvenirText text="+" style={styles.addTripButtonText} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.subtractTripCornerButtonContainer}
        onPress={() => {}}
      >
        <Icon name="minus" size={16} color="black" />
      </TouchableOpacity>

      <FlatList
        data={TripCtx.tripsData}
        renderItem={(item: ListRenderItemInfo<trip>) => {
          const test = item.item;
          return <TripOverview trip={item.item} />;
        }}
      />
      <TouchableOpacity
        style={styles.addTripBottomButtonContainer}
        onPress={navigateToCreateTripPage}
      >
        <AvenirText text="+" style={styles.addTripButtonText} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headers: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  addTripCornerButtonContainer: {
    position: 'absolute',
    top: 46,
    right: 35,
    backgroundColor: '#D3D3D3',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  addTripButtonText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  addTripBottomButtonContainer: {
    backgroundColor: '#D3D3D3',
    paddingHorizontal: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  subtractTripCornerButtonContainer: {
    position: 'absolute',
    top: 48,
    left: 37,
    backgroundColor: '#D3D3D3',
    paddingHorizontal: 13,
    paddingVertical: 13,
    borderRadius: 10,
  },
});

export default TripsFeedPage;