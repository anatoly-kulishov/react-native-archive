import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { themeConfig } from '../../configs/theme.config';

export const HR: FC = () => {
  return <View style={styles.wrapper} />;
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    borderWidth: 1,
    borderColor: themeConfig.colorBlue,
    marginVertical: 15,
  },
});
