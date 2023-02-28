import React from "react";
import { FlatList, StyleSheet, SafeAreaView,TouchableOpacity} from "react-native";
import AvenirText from "../../components/AvenirText";
import TripOverview from "../../components/TripOverview";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const TripsFeedPage : React.FC  = () => {
  //Adds navigation
  type homeScreenProp = NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<homeScreenProp>();

  const navigateToCreateTripPage = () => {
    navigation.navigate('CreateTripPage');
  };

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      place: 'Yosemite',
      title: 'We Love Rocks',
      date: { start: new Date(), end: new Date() },
      uri: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/60/ef.jpg',
      size: 5,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      place: 'Havana',
      title: 'Clubbing in Cuba',
      date: { start: new Date(), end: new Date() },
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhObQOPXQh8_41HvPJQFEapC85R3sNyiyUoA&usqp=CAU',
      size: 3,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d723',
      place: 'Paris',
      title: 'Oui Oui',
      date: { start: new Date(), end: new Date() },
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLaNUMPMutLOTmoliq9MZ2yOZ9DGIVzHQzFnay2GSp0LYuD2HNtbuEVCG4quh-VZJrLE&usqp=CAU',
      size: 11,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Suns Out Guns Out',
      place: 'Miami',
      date: { start: new Date(), end: new Date() },
      uri: 'https://santorinidave.com/wp-content/uploads/2022/10/south-beach-hotels.jpeg',
      size: 9,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <AvenirText text="Trips" style={styles.headers} />
      <TouchableOpacity
        style={styles.addTripCornerButtonContainer}
        onPress={navigateToCreateTripPage}>
        <AvenirText text="+" style={styles.addTripButtonText} />
      </TouchableOpacity>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <TripOverview trip={item} />}
        keyExtractor={(item) => item.id}
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
    fontWeight:'bold'
  },
  addTripBottomButtonContainer: {
    backgroundColor: '#D3D3D3',
    paddingHorizontal: 10,
    borderRadius: 10,
    width:'80%', 
    alignItems:'center', 
    marginTop:10
  },
});

export default TripsFeedPage;