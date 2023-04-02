import React from 'react';
import {  StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const NavigationBar: React.FC<{}> = () => {
  //Adds navigation
  type homeScreenProp = NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<homeScreenProp>();

  const navigateToCreateTripPage = () => {
    navigation.navigate('CreateTripPage');
  };

   const navigateToTripsFeedPage = () => {
     navigation.navigate('TripsFeedPage');
   };

   const navigateToSearchPage = () => {
    navigation.navigate('SearchPage');
   }

   const navigateToProfilePage = () => {
     navigation.navigate('ProfilePage');
   };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.icon} onPress={navigateToTripsFeedPage}>
        <Icon name="home" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={navigateToSearchPage}>
        <Icon name="search" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={navigateToCreateTripPage}>
        <Icon name="plus-square" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={navigateToProfilePage}>
        <Icon name="user" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingTop: 15,
    borderTopWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
  },
  icon: {
  },
});

export default NavigationBar;
