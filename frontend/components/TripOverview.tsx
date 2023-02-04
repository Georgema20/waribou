import { View, StyleSheet} from "react-native";
import AvenirText from "./AvenirText";
import { ImageBackground } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import Icon from 'react-native-vector-icons/FontAwesome';



const TripOverview: React.FC<{}> = (props) => {

  const image = {
    uri: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/60/ef.jpg',
  };

  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ borderRadius: 20 }}
      >
        <View style={styles.tripDetailContainer}>
          <AvenirText text="Yosemite" style={styles.tripName} />
          <AvenirText text="June 12 - June 13" style={styles.tripDate} />
          <AvenirText text="15 people" />
          <Icon name="calendar-o" size={20} color="black" />
          <Icon name="users" size={20} color="black" />
        </View>
      </ImageBackground>
    </View>
  );}

  const styles = StyleSheet.create({
    container: {
      marginVertical: '2%',
      height: 200,
      width: 330,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tripDetailContainer: {
      backgroundColor: 'grey',
      zIndex: 1,
      borderRadius: 20,
      paddingHorizontal: '5%',
      opacity: 0.8,
      marginLeft: '4%',
      marginBottom: '4%',
    },
    tripName: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    tripDate: {
      fontStyle: 'italic',
      fontSize: 14,
    },
    tripSize: {
      fontSize: 16,
    },
    image: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      width: '100%',
      height: '100%',
    },
  });

  export default TripOverview;