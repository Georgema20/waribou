import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const PeopleCircles: React.FC<{
  uri: string;
  id?: string;
  onPress?: () => void;
}> = (props) => {
  return (
    <TouchableOpacity style={styles.face}>
      <Image style={styles.face} source={{ uri: props.uri }}></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  face: {
    width: 55,
    height: 55,
    borderRadius:50
  },
});

export default PeopleCircles;
