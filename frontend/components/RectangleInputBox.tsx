import { useState } from 'react';
import { NativeSyntheticEvent, StyleSheet, TextInput, View} from 'react-native';
import { TextInputFocusEventData } from 'react-native';

const RectangleInputBox :React.FC<{placeholder:string, placeholderTextColor?:string, value:string, onChange: (word : string) => void , secured? : boolean}>= (props) => {

const [placeholderExists, setPlaceholderExists] = useState<boolean>(true);

const handleFocusEvent = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
  setPlaceholderExists(false);
};

const handleBlurEvent = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
  setPlaceholderExists(true);
};

  return (
    <View style={styles.TextInputContainer}>
      <TextInput
        placeholder={placeholderExists ? props.placeholder : ''}
        placeholderTextColor={props.placeholderTextColor}
        value={props.value}
        onChangeText={props.onChange}
        style={styles.text}
        secureTextEntry={props.secured}
        onFocus={handleFocusEvent}
        onBlur={handleBlurEvent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputContainer: {
    width: 270,
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: 'rgba(215, 215, 215, 1)',
  },
  text: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default RectangleInputBox;
