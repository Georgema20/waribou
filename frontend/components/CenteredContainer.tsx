import React, {ReactNode} from "react";
import { View, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native";
const CenteredContainer: React.FC<{
  children: ReactNode;
  top?: boolean;
  style?: any;
}> = (props) => {
  let containerStyles;

  props.top == true
    ? (containerStyles = styles.topContainer)
    : (containerStyles = styles.container);

  console.log(props.style);

  return (
    <SafeAreaView>
      <View style={[containerStyles,props.style]}>{props.children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '8%',
  },
});

export default CenteredContainer;