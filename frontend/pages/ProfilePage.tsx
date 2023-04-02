import React from 'react';
import { Text, StyleSheet, SafeAreaView, View} from 'react-native';
import CenteredContainer from '../components/CenteredContainer';
import NavigationBar from '../components/NavigationBar';

const ProfilePage: React.FC<{}> = (props) => {
  return (
    <SafeAreaView>
    <CenteredContainer >
      <View style={styles.outerContainer}>
        <Text>This is my profile page</Text>
      </View>
      <NavigationBar />
    </CenteredContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer:{
    flex:1, 
    justifyContent:'center',
    alignItems:'center'
  }
});

export default ProfilePage;
