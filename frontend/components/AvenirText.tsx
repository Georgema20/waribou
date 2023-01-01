import React from 'react';
import { Text, StyleSheet} from 'react-native';

const AvenirText: React.FC<{ text: string, onPress?: () => void, style?:any}> = (
  props
) => {
  return (
    <Text style={[styles.text, props.style]} onPress={props.onPress}>
      {props.text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Avenir',
  },
});

export default AvenirText;
