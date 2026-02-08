import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const tabArr = ['All Orders ', 'Processing', 'Delievered'];
const ACTIVE_BG = '#87CEEB';
const ACTIVE_TEXT = '#0000';
const INACTIVE_TEXT = '#2C2016';
const Toptabs = () => {
  const [Activetab, setActiveTab] = useState('Processing');

  return (
    <View style={styles.container}>
      {tabArr.map(tabName => {
        return (
          <TouchableOpacity
            style={[
              styles.tabButton,
              Activetab === tabName && { backgroundColor: ACTIVE_BG },
            ]}
          >
            <Text
              style={[
                styles.tabtext,
                Activetab === tabName && { color: ACTIVE_TEXT },
              ]}
            >
              {tabName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Toptabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F4',
    borderRadius: 12,
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    padding: 4,
  },
  tabButton: {
    height: 32,
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  tabtext: { color: '#000', fontFamily: 'Langar-Regular' },
});
