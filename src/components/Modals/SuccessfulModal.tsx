import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Modal } from 'react-native';
import { Button } from '@rneui/themed';
import Colors from '../../constants/Colors';

interface PropType  {
    showModal: boolean, 
    setShowModal: (v: boolean) => void
}

const SuccessfulModal = ({showModal , setShowModal}: PropType) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(false);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Submission Successful!</Text>
          <Button
            title="Close"
            onPress={() => {
              setShowModal(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SuccessfulModal;

const styles = StyleSheet.create({
      // Styles for the modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: Colors.dark.background2,
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    color: Colors.dark.text100
  },
});
