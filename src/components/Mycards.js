import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Mycards = () => {
  return (
    <View style={styles.cardcontainer}>
      <View style={styles.container}>
        <Text style={styles.cardtext}>20% OFF DURING THE WEEKEND</Text>
        <View style={styles.cardbutton}>
          <Text style={styles.cardbuttontext}>Get Now</Text>
        </View>
      </View>
      <View style={[styles.container, { backgroundColor: '#1383F1' }]}>
        <Text style={styles.cardtext}>20% OFF DURING THE WEEKEND</Text>
        <View style={[styles.cardbutton, { backgroundColor: '#50D63B' }]}>
          <Text style={[styles.cardbuttontext, { color: '#fff' }]}>
            Get Now
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Mycards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F17547',
    height: 130,
    width: 235,
    borderRadius: 15,
    paddingHorizontal: 18,
  },
  cardbutton: {
    height: 34,
    width: 80,
    backgroundColor: '#fff',
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardbuttontext: { color: '#F17547', fontSize: 12, fontWeight: 'bold' },
  cardtext: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 7,
    marginHorizontal: 8,
  },
  cardcontainer: { marginTop: 10, flexDirection: 'row', gap: 10 },
});
