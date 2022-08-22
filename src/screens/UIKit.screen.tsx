import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AppTextInput } from '../components/ui/AppTextInput';
import { HR } from '../components/ui/HR';
import { ProductsList } from '../components/ProductsList';

export const UIKit: FC = () => {
  return (
    <ScrollView style={styles.container}>
      <AppTextInput
        label="TextArea"
        type="textarea"
        placeholder="Placeholder"
      />
      <HR />
      <AppTextInput label="Input" type="input" />
      <HR />
      <ProductsList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
});
