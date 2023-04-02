import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList} from 'react-native';
import CenteredContainer from '../components/CenteredContainer';
import DetailInput from '../components/DetailInput';
import NavigationBar from '../components/NavigationBar';
import { useState } from 'react';
import AvenirText from '../components/AvenirText';
import { ListRenderItemInfo } from 'react-native';

const SearchPage: React.FC<{
}> = (props) => {


  const [searchValue, setSearchValue] = useState('');
  const tempData = ['hello', 'hi', 'bye'];
  return (
    <SafeAreaView>
      <CenteredContainer>
        <View style={styles.outerContainer}>
          <DetailInput
            placeholder="username"
            onChangeText={setSearchValue}
            value={searchValue}
            searchBar={true}
          />
          <CenteredContainer>
            <FlatList
              data={tempData}
              renderItem={(item : ListRenderItemInfo<string>) => {
                return <AvenirText text={item.item}/>;
              }}
            />
          </CenteredContainer>
        </View>
        <NavigationBar />
      </CenteredContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingTop:40
  },
});

export default SearchPage;
