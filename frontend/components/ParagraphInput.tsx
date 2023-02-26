import { StyleSheet, TextInput, View } from 'react-native';

const ParagraphInput: React.FC<{
  placeholder?: string;
  placeholderTextColor?: string;
  value: string;
  onChangeText: (value: string) => void;
}> = (props) => {
  return (
    <View style={styles.TextInputContainer}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.TextInput}
        editable={true}
        maxLength={200}
        multiline={true}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputContainer: {
    alignItems: 'flex-start',
    width: '65%',
  },
  TextInput: {
    textAlign: 'left',
    fontFamily: 'Avenir',
    fontSize: 18,
    fontStyle: 'italic',
    maxHeight:200, 
    width:'100%'
  },
});

export default ParagraphInput;
