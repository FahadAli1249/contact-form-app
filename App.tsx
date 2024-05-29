import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ContactForm from './src/components/ContactForm';
import Colors from './src/constants/Colors';

const App = () => {
  return (
    <View  style={styles.container}>
      <ContactForm />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.dark.background1,
  },
});
