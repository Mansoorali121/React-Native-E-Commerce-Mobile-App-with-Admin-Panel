import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const TabArr = ['All', 'Pending', 'Processing', 'Delievered'];
const ACTIVE_BG = '#87CEEB';

const AdminTabs = () => {
  // Active Tab
  const [Activetab, setActiveTab] = useState('All');
  return (
    <View style={styles.container}>
      {TabArr.map(tabName => {
        return (
          <TouchableOpacity
            style={[
              styles.tabButtoon,
              Activetab === tabName && { backgroundColor: ACTIVE_BG },
            ]}
            onPress={() => setActiveTab(tabName)}
          >
            <Text
              style={
                Activetab === tabName ? styles.activetext : styles.Inactivetext
              }
            >
              {tabName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default AdminTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F4',
    borderRadius: 12,
    height: 40,
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 15,
    alignItems: 'center',
    padding: 4,
  },
  tabButtoon: {
    height: 32,
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activetext: { fontSize: 12, fontFamily: 'Redressed-Regular' },
  Inactivetext: {
    fontSize: 12,
    fontFamily: 'Redressed-Regular',
    color: 'gray',
  },
});
