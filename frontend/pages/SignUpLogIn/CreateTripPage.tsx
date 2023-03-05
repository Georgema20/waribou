import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TouchableOpacity, View } from 'react-native';
import CenteredContainer from '../../components/CenteredContainer';
import AvenirText from '../../components/AvenirText';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DetailInput from '../../components/DetailInput';
import { ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ParagraphInput from '../../components/ParagraphInput';
import React, { useState} from 'react';
import DateInput from '../../components/DateInput';
import { useContext } from 'react';
import { TripContext } from '../../store/TripContext';

const CreateTripPage: React.FC = () => {
  //Adds navigation
  type homeScreenProp = NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<homeScreenProp>();

  const navigateTripsFeedPage = () => {
    navigation.navigate('TripsFeedPage');
  };

  //creating states
  const [place, setPlace] = useState('');
  const [title, setTitle] = useState('');
  const [budget, setBudget] = useState('');
  const [description, setDescription] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState<Date>(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState<Date>(new Date());

  //photo
  const [image, setImage] = useState<string>(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhH6s6DXgubR82QoIgDmNlcvvUH9PiPCpSA&usqp=CAU'
  );

  //creating context
  const TripCtx = useContext(TripContext);

  //functions

  const loadLibrary = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri: string | null = result.assets[0].uri;
      setImage(uri);
    }
  };

  const loadCamera = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      const uri: string | undefined = result.uri;
      setImage(uri!);
    }
  };

  const createTrip = async () => {

    const trip = {
      place: place,
      title: title,
      date: { start: selectedStartDate, end: selectedEndDate },
      uri: image,
      size: 3,
    };

    await TripCtx.createTrip(trip);

    navigation.navigate('TripsFeedPage');
  };

  const setBudgetFunction = (text:string) => {
       let newText = '';
       let numbers = '0123456789';

       for (var i = 0; i < text.length; i++) {
         if (numbers.indexOf(text[i]) > -1) {
           newText = newText + text[i];
         } else {
           // your call back function
         }
       }
       setBudget(`${newText}`);
  }

  const formatBudgetFunction = (text:string) => {
    console.log('hi');
    const og = text;

    for (var int = text.length; int>3; int = int - 3){
      text = text.slice(0,int-3) + ',' + text.slice(int-3);
    }
  
    return '~' + text;
  }


  return (
    <CenteredContainer>
      <View style={styles.outsideContainer}>
        <TouchableOpacity
          onPress={createTrip}
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
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{
              uri: image!,
            }}
            resizeMode="cover"
            style={styles.image}
            imageStyle={{ borderRadius: 20 }}
          />
          <TouchableOpacity
            onPress={loadCamera}
            style={[styles.ButtonContainer, styles.CameraButton]}
          >
            <Icon name="camera-retro" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={loadLibrary}
            style={[styles.ButtonContainer, styles.GalleryButton]}
          >
            <Icon name="picture-o" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailContainer}>
            <AvenirText text="Title:" style={styles.detail} />
            <DetailInput
              placeholder="Operation Find McDreamy"
              placeholderTextColor="grey"
              value={title}
              onChangeText={setTitle}
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
            <View style={styles.dateContainer}>
              <DateInput
                selectedDate={selectedStartDate}
                onChange={setSelectedStartDate}
              />
              <AvenirText text="-" style={styles.date} />
              <DateInput
                selectedDate={selectedEndDate}
                onChange={setSelectedEndDate}
              />
            </View>
          </View>
          <View style={styles.detailContainer}>
            <AvenirText text="Budget ($):" style={styles.detail} />
            <DetailInput
              placeholderTextColor="grey"
              placeholder="~50"
              value={budget == '' ? budget : formatBudgetFunction(budget)}
              onChangeText={(text) => setBudgetFunction(text)}
              maxLength={10}
            />
          </View>
          <View style={styles.detailContainer}>
            <AvenirText text="Description:" style={styles.detail} />
            <ParagraphInput
              placeholder="Very rainy. Pack your rain jackets and umbrellas. Expect lots of hikes and good eats!"
              placeholderTextColor="grey"
              value={description}
              onChangeText={setDescription}
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
    borderRadius: 30,
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
  GalleryButton: {
    bottom: 10,
    right: 10,
  },
  CameraButton: {
    bottom: 10,
    left: 15,
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    flexDirection: 'row',
  },
  dateContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    width: '70%',
    height: '100%',
    paddingBottom: 20,
  },
  detailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    marginTop: 60,
  },
  detail: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingTop: 4,
    paddingHorizontal: 8,
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    backgroundColor: 'red',
    marginTop: 90,
    borderRadius: 30,
  },
});

export default CreateTripPage;
