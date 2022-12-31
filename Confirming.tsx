
import { Text } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Linking } from "react-native";


import { useParams } from "react-router-dom";

const Confirming = ({route}: {route: any})=> {

const {token, tokenId} = route.params;


  return <Text>This is {token} and this is {tokenId}</Text>
}

export default Confirming;