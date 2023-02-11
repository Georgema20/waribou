import { StyleSheet, TextInput, View } from 'react-native';

const DetailInput : React.FC<{placeholder?:string, placeholderTextColor?:string, value:string,onChangeText:(value: string)=> void}> = (props) => {
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
    width: 190,
    height: 30,
    margin: 5,
    padding: 5,
    alignItems: 'flex-start',
    flexGrow: 1,
  },
  TextInput: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 18,
    fontStyle: 'italic',
  },
});

export default DetailInput;
