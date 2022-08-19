import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../../constants/theme';

export const HR: FC = () => {
  return <View style={styles.wrapper} />;
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    borderWidth: 1,
    borderColor: theme.colorBlue,
    marginVertical: 15,
  },
});
