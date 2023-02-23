import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TouchableOpacity, View } from 'react-native';
import CenteredContainer from '../../components/CenteredContainer';
import AvenirText from '../../components/AvenirText';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DetailInput from '../../components/DetailInput';
import { useState } from 'react';
import { ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const CreateTripPage: React.FC = () => {
  //Adds navigation
  type homeScreenProp = NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<homeScreenProp>();

  const navigateTripsFeedPage = () => {
    navigation.navigate('TripsFeedPage');
  };

  const [place, setPlace] = useState('');
  const [name, setName] = useState('');
  const [budget, setBudget] = useState('');

  //photo
   const [image, setImage] = useState<string>(
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhH6s6DXgubR82QoIgDmNlcvvUH9PiPCpSA&usqp=CAU'
   );

const loadLibrary = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if(!result.canceled)
  {
    const uri: string | null = result.assets[0].uri;
    setImage(uri);
  }
  

  console.log(result);
}

  return (
    <CenteredContainer>
      <View style={styles.outsideContainer}>
        <TouchableOpacity
          onPress={navigateTripsFeedPage}
          style={[styles.ButtonContainer, styles.SubmitButton]}
        >
          <Icon name="paper-plane" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateTripsFeedPage}
          style={[styles.ButtonContainer, styles.BackButton]}
        >
          <Icon name="chevron-left" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={loadLibrary} style={styles.imageContainer}>
          <ImageBackground
            source={{
              uri: image!,
            }}
            resizeMode="cover"
            style={styles.image}
            imageStyle={{ borderRadius: 20 }}
          />
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <View style={styles.detailContainer}>
            <AvenirText text="Name:" style={styles.detail} />
            <DetailInput
              placeholder="Operation Find McDreamy"
              placeholderTextColor="grey"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.detailContainer}>
            <AvenirText text="Place:" style={styles.detail} />
            <DetailInput
              placeholder="Seattle, Washington"
              placeholderTextColor="grey"
              value={place}
              onChangeText={setPlace}
            />
          </View>

          {/* need to change out the below replace dates and description  */}
          <View style={styles.detailContainer}>
            <AvenirText text="Dates:" style={styles.detail} />
            <DetailInput
              placeholder="Seattle, Washington"
              placeholderTextColor="grey"
              value={place}
              onChangeText={setPlace}
            />
          </View>
          <View style={styles.detailContainer}>
            <AvenirText text="Budget ($):" style={styles.detail} />
            <DetailInput
              placeholder="50"
              placeholderTextColor="grey"
              value={budget}
              onChangeText={setBudget}
            />
          </View>
          <View style={styles.detailContainer}>
            <AvenirText text="Description:" style={styles.detail} />
            <DetailInput
              placeholder="Seattle, Washington"
              placeholderTextColor="grey"
              value={place}
              onChangeText={setPlace}
            />
          </View>
        </View>
      </View>
    </CenteredContainer>
  );
};

const styles = StyleSheet.create({
  outsideContainer: {
    width: '90%',
    height: '100%',
    backgroundColor: '#D3D3D3',
    position: 'absolute',
    top: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
  },
  ButtonContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    position: 'absolute',
  },
  BackButton: {
    top: 10,
    left: 15,
  },
  SubmitButton: {
    top: 10,
    right: 10,
  },
  image: {
    height: 220,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 30,
  },
  detailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  detailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop: 30,
  },
  detail: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  imageContainer: {
    backgroundColor: 'red',
    marginTop: 70,
    borderRadius: 30,
  },
});

export default CreateTripPage;
