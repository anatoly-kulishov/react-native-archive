import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from "../components/AppText";

export const Analytics: React.FC = () => {
  return (
    <View style={styles.container}>
      <AppText fontFamily="bold">Analytics</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
});
