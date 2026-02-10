import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminTabs from '../components/AdminTabs';
import Adminordercard from '../components/Adminordercard';

const AdminHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.adminhome}>
        <Text style={styles.admintext}>Admin Home</Text>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <AdminHeader />
        <AdminTabs />
        <Adminordercard />
      </View>
    </View>
  );
};

export default AdminHome;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  adminhome: {
    backgroundColor: '#87CEEB',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  admintext: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Audiowide-Regular',
  },
});
