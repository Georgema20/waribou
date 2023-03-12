import { View, StyleSheet, TouchableOpacity} from "react-native";
import AvenirText from "./AvenirText";
import { ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { trip } from "../../models/models";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";


const TripOverview: React.FC<{ trip: trip }> = (
  props
) => {

  const AuthCtx = useContext(AuthContext);

  return (
    <TouchableOpacity style={styles.container}>
     <View style={styles.crownContainer}>
        { AuthCtx.id==props.trip.owner ? <Icon name="user" size={25} color="black" /> : <Icon name="user-o" size={25} color="black"/>}
      </View>
      <ImageBackground
        source={{ uri: props.trip.uri! }}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ borderRadius: 20 }}
      >
        {/* <AvenirText text={props.trip.title!} style={styles.tripName} /> */}
        <View style={styles.tripDetailContainer}>
          <View style={styles.iconTextContainer}>
            <Icon
              name="map-marker"
              size={20}
              color="black"
              style={{ marginLeft: '2%' }}
            />
            <AvenirText text={props.trip.place!} style={styles.tripPlace} />
          </View>
          <View style={styles.iconTextContainer}>
            <Icon name="calendar-o" size={20} color="black" />
            <AvenirText
              text={props.trip.date.start.toDateString()!}
              style={styles.tripDate}
            />
          </View>
          <View style={styles.iconTextContainer}>
            <Icon name="users" size={20} color="black" />
            <AvenirText
              text={props.trip.size.toString()!}
              style={styles.tripSize}
            />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

  const styles = StyleSheet.create({
    container: {
      marginVertical: '2%',
      height: 200,
      width: 330,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tripDetailContainer: {
      backgroundColor: '#D3D3D3',
      zIndex: 1,
      borderRadius: 20,
      paddingHorizontal: '5%',
      opacity: 0.9,
      marginLeft: '4%',
      marginBottom: '4%',
      paddingVertical: '1%',
    },
    // tripName: {
    //   fontWeight: 'bold',
    //   fontSize: 18,
    //   position:'absolute',
    //   top:'25%',
    //   left:'%'
    // },
    tripDate: {
      fontStyle: 'italic',
      fontSize: 12,
      marginLeft: '4%',
      fontWeight: 'bold',
      marginTop: '2%',
    },
    tripSize: {
      fontSize: 12,
      marginLeft: '4%',
      fontWeight: 'bold',
      marginTop: '2%',
    },
    tripPlace: {
      fontSize: 12,
      marginLeft: '5%',
      fontWeight: 'bold',
      marginTop: '2%',
    },
    image: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      width: '100%',
      height: '100%',
    },
    iconTextContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    crownContainer: {
      backgroundColor: '#D3D3D3',
      zIndex: 1,
      borderRadius: 20,
      paddingHorizontal: '3%',
      opacity: 0.9,
      right:10,
      top:10,
      paddingVertical: '1%',
      position:"absolute",
      justifyContent:'center',
      alignItems:'center'
    },
  });

  export default TripOverview;