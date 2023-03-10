import { StyleSheet, TextInput, View } from 'react-native';

const DetailInput : React.FC<{placeholder?:string, placeholderTextColor?:string, value:string,onChangeText:(value: string)=> void, maxLength?:number}> = (props) => {
  return (
    <View style={styles.TextInputContainer}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.TextInput}
        maxLength={props.maxLength}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputContainer: {
    width: 190,
    height: 40,
    paddingBottom:10,
    marginBottom:10,
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
