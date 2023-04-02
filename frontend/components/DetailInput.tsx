import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailInput : React.FC<{placeholder?:string, placeholderTextColor?:string, value:string,onChangeText:(value: string)=> void, maxLength?:number, searchBar?:boolean, style?: any}> = (props) => {
  return (
    <View style={props.searchBar ? styles.SearchBarTextInputContainer : styles.TextInputContainer}>

      {props.searchBar == true ?  <Icon name="search" size={20} color="black" style={{marginTop:1}}/> : null}

      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        value={props.value}
        onChangeText={props.onChangeText}
        style={ props.searchBar == true ? styles.searchBar : styles.TextInput}
        maxLength={props.maxLength}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputContainer: {
    width: 190,
    height: 40,
    paddingBottom: 10,
    marginBottom: 10,
    padding: 5,
    alignItems: 'flex-start',
    flexGrow: 1,
    flexDirection: 'row',
  },
  TextInput: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 18,
    fontStyle: 'italic',
  },
  searchBar: {
    textAlign: 'left',
    fontFamily: 'Avenir',
    fontSize: 16,
    fontStyle: 'italic',
    marginLeft: 10,
    borderWidth: 2,
    height: 35,
    borderColor: 'black',
    borderRadius: 10,
    paddingLeft: 10,
    width: '100%',
  },
  SearchBarTextInputContainer: {
    width:'70%',
    height: 40,
    paddingBottom: 10,
    marginBottom: 10,
    padding: 5,
    alignItems: 'flex-start',
    flexGrow: 1,
    flexDirection: 'row',
  },
});

export default DetailInput;
