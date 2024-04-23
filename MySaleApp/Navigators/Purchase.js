import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CreditCard from './CreditCard'; 

class Purchase extends Component {
  render() {
    return (
      <View style={styles.app}>
        <CreditCard name="" date=""  cardnumber=""  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    marginTop: 20
  }
});

export default Purchase;

