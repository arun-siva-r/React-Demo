import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState<Date | null>(null);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleOk = () => {
    setShowModal(false);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="person-circle" size={40} />
        <Text style={styles.fullName}>{fullName || 'Full Name'}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <Text>Gender:</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity onPress={() => setGender('Male')} style={styles.radio}>
          <View style={styles.radio}>
            <View style={gender === 'Male' ? styles.radioSelected : styles.radioNotSelected} />
            <Text style={styles.radioText}>Male</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('Female')} style={styles.radio}>
          <View style={styles.radio}>
            <View style={gender === 'Female' ? styles.radioSelected : styles.radioNotSelected} />
            <Text style={styles.radioText}>Female</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text>DOB:</Text>
        <Button title={dob ? dob.toDateString() : "Select Date"} onPress={() => setShowDatePicker(true)} />
        {showDatePicker && (
          <DateTimePicker
            value={dob || new Date()}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || dob;
              setShowDatePicker(false);
              setDob(currentDate);
            }}
          />
        )}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <View style={styles.pickerContainer}>
        <Text>State:</Text>
        <Picker
          selectedValue={state}
          style={styles.picker}
          onValueChange={(itemValue) => setState(itemValue)}
        >
          <Picker.Item label="Select State" value="" />
          <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
          <Picker.Item label="Karnataka" value="Karnataka" />
          {/* Add more states as needed */}
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Profile Information</Text>
            <View style={styles.table}>
              <Text style={styles.tableRow}><Text style={styles.tableHeader}>Full Name:</Text> {fullName}</Text>
              <Text style={styles.tableRow}><Text style={styles.tableHeader}>Gender:</Text> {gender}</Text>
              <Text style={styles.tableRow}><Text style={styles.tableHeader}>DOB:</Text> {dob ? dob.toDateString() : "N/A"}</Text>
              <Text style={styles.tableRow}><Text style={styles.tableHeader}>Address:</Text> {address}</Text>
              <Text style={styles.tableRow}><Text style={styles.tableHeader}>City:</Text> {city}</Text>
              <Text style={styles.tableRow}><Text style={styles.tableHeader}>State:</Text> {state}</Text>
              <Text style={styles.tableRow}><Text style={styles.tableHeader}>Country:</Text> {country}</Text>
            </View>
            <Button title="OK" onPress={handleOk} />
            <Button title="Close" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  fullName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    marginTop: 15
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  radio: {
    flexDirection: 'row',
    alignItems: "center",
  },
  radioText: {
    marginLeft: 8,
  },
  radioSelected: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'green',
  },
  radioNotSelected: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  pickerContainer: {
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  table: {
    marginBottom: 16,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableHeader: {
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
