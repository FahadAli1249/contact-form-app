import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useRef, useState} from 'react';
import {Button, Input} from '@rneui/themed';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import Colors from '../constants/Colors';
import AssistantIcon from '../icons/AssistantIcon';
import {SelectLocalMedia} from '../utils/selectLocalMedia';
import ActionButton from './buttons/ActionButton';
import Recaptcha, {RecaptchaRef} from 'react-native-recaptcha-that-works';
import SuccessfulModal from './Modals/SuccessfulModal';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralDetails, setReferralDetails] = useState('');
  const [socialMediaLink, setSocialMediaLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const recaptcha = useRef<RecaptchaRef>(null);

  const send = () => {
    console.log('send!');
    recaptcha.current?.open();
  };

  const onVerify = (token: any) => {
    console.log('success!', token);
  };

  const onExpire = () => {
    console.warn('expired!');
  };

  async function onClickLibrary() {
    const media = await SelectLocalMedia(1, 'mixed');
    if (!media) {
      return;
    }
  }

  const onSubmit = () => {
    if (
      firstName &&
      lastName &&
      email &&
      phoneNumber &&
      referralDetails &&
      socialMediaLink
    ) {
      setShowModal(true);
      resetForm();
    }
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setReferralDetails('');
    setSocialMediaLink('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logo}>
        <AssistantIcon width={64} height={64} />
      </View>
      <View style={styles.inputContainer}>
        <Input
          inputContainerStyle={{width: '90%', borderColor: 'transparent'}}
          inputStyle={styles.input}
          leftIcon={
            <IonIcon
              name="person-outline"
              size={20}
              color={Colors.dark.text50}
            />
          }
          errorMessage=""
          errorStyle={{opacity: 0.7}}
          errorProps={{}}
          labelProps={{}}
          placeholder="First Name"
          placeholderTextColor={Colors.dark.text10}
          value={firstName}
          onChangeText={v => setFirstName(v)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Input
          inputContainerStyle={{width: '90%', borderColor: 'transparent'}}
          inputStyle={styles.input}
          leftIcon={
            <IonIcon
              name="person-outline"
              size={20}
              color={Colors.dark.text50}
            />
          }
          errorMessage=""
          errorStyle={{opacity: 0.7}}
          errorProps={{}}
          labelProps={{}}
          placeholder="Last Name"
          placeholderTextColor={Colors.dark.text10}
          value={lastName}
          onChangeText={v => setLastName(v)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Input
          inputContainerStyle={{width: '90%', borderColor: 'transparent'}}
          inputStyle={styles.input}
          leftIcon={
            <Icon name="email-outline" size={20} color={Colors.dark.text50} />
          }
          errorMessage=""
          errorStyle={{opacity: 0.7}}
          errorProps={{}}
          labelProps={{}}
          placeholder="Email Address"
          keyboardType="email-address"
          placeholderTextColor={Colors.dark.text10}
          value={email}
          onChangeText={v => setEmail(v)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Input
          inputContainerStyle={{width: '90%', borderColor: 'transparent'}}
          inputStyle={styles.input}
          leftIcon={
            <SimpleIcon name="phone" size={20} color={Colors.dark.text50} />
          }
          errorMessage=""
          errorStyle={{opacity: 0.7}}
          errorProps={{}}
          labelProps={{}}
          placeholder="Phone Number"
          placeholderTextColor={Colors.dark.text10}
          value={phoneNumber}
          keyboardType="phone-pad"
          onChangeText={v => setPhoneNumber(v)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Input
          inputContainerStyle={{width: '90%', borderColor: 'transparent'}}
          inputStyle={styles.input}
          leftIcon={
            <Octicons
              name="cross-reference"
              size={20}
              color={Colors.dark.text50}
            />
          }
          errorMessage=""
          errorStyle={{opacity: 0.7}}
          errorProps={{}}
          labelProps={{}}
          placeholder="Referral Details"
          placeholderTextColor={Colors.dark.text10}
          value={referralDetails}
          onChangeText={v => setReferralDetails(v)}
          multiline={true}
        />
      </View>

      <View style={styles.inputContainer}>
        <Input
          inputContainerStyle={{width: '90%', borderColor: 'transparent'}}
          inputStyle={styles.input}
          leftIcon={
            <IonIcon
              name="logo-facebook"
              size={20}
              color={Colors.dark.text50}
            />
          }
          errorMessage=""
          errorStyle={{opacity: 0.7}}
          errorProps={{}}
          labelProps={{}}
          placeholder="Social Media Profile Link"
          placeholderTextColor={Colors.dark.text10}
          value={socialMediaLink}
          onChangeText={v => setSocialMediaLink(v)}
        />
      </View>

      <Button
        type="clear"
        containerStyle={styles.addMediaContainer}
        title={'Upload Media'}
        titleStyle={styles.addImageText}
        icon={
          <IonIcon name="image-outline" size={18} color={Colors.dark.text100} />
        }
        onPress={onClickLibrary}
      />

      {/* <Recaptcha
        ref={recaptcha}
        siteKey="6LcUAOwpAAAAAFPgF05DyaEDTRSZdj-PjMSaZOYE"
        baseUrl="google.com"
        onVerify={onVerify}
        onExpire={onExpire}
        size="invisible"
      />

      <Button title="Send" onPress={send} /> */}

      <ActionButton
        text="Submit"
        height={50}
        fontSize={18}
        containerStyle={{marginTop: 20}}
        loading={loading}
        onPress={onSubmit}
      />

      <SuccessfulModal showModal={showModal} setShowModal={setShowModal} />
    </ScrollView>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    marginTop: 50,
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.dark.text10,
    backgroundColor: '#d9d9d912',
    marginTop: 14,
    height: 50,
  },
  input: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    color: Colors.dark.text100,
  },
  addMediaContainer: {
    alignSelf: 'flex-start',
    marginBottom: 16,
    marginTop: 16,
  },
  addImageText: {
    fontSize: 14,
    paddingLeft: 8,
    color: Colors.dark.text30,
  },
});
