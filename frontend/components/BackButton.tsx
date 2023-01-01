import React from 'react';
import AvenirText from './AvenirText';
import { StyleSheet} from 'react-native';

const symbol = '<';
const BackButton : React.FC<{onPress:()=>void}> = (props) => {
  return (
    <AvenirText onPress={props.onPress} style={styles.backButton} text={symbol}/>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 40,
    left: 30,
    fontSize: 40,
    color: 'rgba(66, 66, 66, 1)',
    opacity:0.7
  },
});

export default BackButton;




