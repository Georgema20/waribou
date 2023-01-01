import { StyleSheet, TextInput, View } from 'react-native';

const UnderlineInput : React.FC<{placeholder?:string, placeholderTextColor?:string, value:string,onChangeText:(value: string)=> void}> = (props) => {
  return (
    <View style={styles.TextInputContainer}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.TextInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputContainer: {
    width: 280,
    height: 30,
    margin: 15,
    padding: 5,
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  TextInput: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 18,
  },
});

export default UnderlineInput;
