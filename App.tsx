import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <Text>kuch bi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
});

export default App;
