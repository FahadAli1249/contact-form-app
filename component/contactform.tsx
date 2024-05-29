// components/ContactForm.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Checkbox from '@react-native-community/checkbox';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [referral, setReferral] = useState<string>('');
  const [socialMedia, setSocialMedia] = useState<string>('');
  const [captcha, setCaptcha] = useState<boolean>(false);
  const [video, setVideo] = useState<string | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setVideo(result.assets[0].uri); // accessing the uri from the assets array
    }
  };

  const handleSubmit = () => {
    if (!acceptedTerms) {
      Alert.alert('Error', 'You must accept the terms and NDA.');
      return;
    }

    const formData = {
      name,
      email,
      phone,
      referral,
      socialMedia,
      captcha,
      video,
    };

    console.log('Form Data:', formData);
    Alert.alert('Success', 'Form submitted successfully!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text>Contact Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

      <Text>Phone Number:</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

      <Text>Referral Details:</Text>
      <TextInput style={styles.input} value={referral} onChangeText={setReferral} />

      <Text>Social Media Profile Link:</Text>
      <TextInput style={styles.input} value={socialMedia} onChangeText={setSocialMedia} />

      <View style={styles.checkboxContainer}>
        <Checkbox
          value={captcha}
          onValueChange={setCaptcha}
        />
        <Text>Google Captcha</Text>
      </View>

      <Button title="Upload your video" onPress={pickVideo} />
      {video && <Text>Video uploaded</Text>}

      <View style={styles.checkboxContainer}>
        <Checkbox
          value={acceptedTerms}
          onValueChange={setAcceptedTerms}
        />
        <Text>Please sign the concern and NDA for your content. <Text style={styles.link}>View to read more</Text></Text>
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  link: {
    color: 'blue',
  },
});

export default ContactForm;
