import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const SettingScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.optionText}>Accounts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.optionText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.optionText}>Display</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.optionText}>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.optionText}>Security</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  settingOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
  },
});

export default SettingScreen;
