import React from 'react';
import { StyleSheet, TouchableHighlight} from 'react-native';
import AvenirText from './AvenirText';

const GenericButton1 : React.FC<{text:string, onPress: () => void, light:boolean}>= (props) => {

  return (
    <TouchableHighlight
      style={props.light ? styles.lightButton : styles.darkButton}
       onPress={props.onPress}
    >
      <AvenirText style={props.light ? styles.darkText : styles.lightText} text={props.text}/>
    </TouchableHighlight>
  );
};


const styles = StyleSheet.create({
  lightText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Avenir',
    textAlign: 'center',
  },
  darkText: {
    color: 'rgba(66, 66, 66, 1)',
    fontSize: 17,
    fontFamily: 'Avenir',
    textAlign: 'center',
  },
  lightButton: {
    backgroundColor: 'rgba(215, 215, 215, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 38,
    marginVertical: 13,
    marginHoriztonal:10,
    borderRadius: 10,
    width:150
  },
  darkButton: {
    backgroundColor: 'rgba(123, 123, 123, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 38,
    marginVertical: 13,
    marginHorizontal:10,
    borderRadius: 10,
    width:160
  },
});

export default GenericButton1;
