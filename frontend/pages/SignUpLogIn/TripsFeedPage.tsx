import React from "react";
import { View, FlatList, ScrollView, StyleSheet, SafeAreaView, Text} from "react-native";
import AvenirText from "../../components/AvenirText";
import CenteredContainer from "../../components/CenteredContainer";
import TripOverview from "../../components/TripOverview";

const TripsFeedPage : React.FC  = () => {


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }
];

  return (
    <SafeAreaView style={{ flex: 1, alignItems:'center'}}>
      <AvenirText text="Trips" style={styles.headers} />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <TripOverview/>}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headers: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom:10,
    textDecorationLine:'underline'
  },
  flatList:{

  },
});

export default TripsFeedPage;