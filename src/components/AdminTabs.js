import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const TabArr = ['All','Pending', 'Processing', 'Delievered'];
const ACTIVE_BG = '#75563B';
const ACTIVE_TEXT = '#fff';

const INACTIVE_TEXT = '#2C2016';

const AdminTabs = () => {
  return (
    <View style={styles.container}>
      {TabArr.map(tabName => {
        return (
          <TouchableOpacity style={styles.tabButtoon}>
            <Text>{tabName}</Text>
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
    marginTop:20,
    marginHorizontal:15,
    alignItems:"center",
    padding:4
  },
  tabButtoon: {
    height: 32,
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
