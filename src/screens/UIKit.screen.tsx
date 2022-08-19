import React from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import { AppTextInput } from '../components/ui/AppTextInput';
import { AppButton } from '../components/ui/AppButton';
import { HR } from '../components/ui/HR';

export const UIKit: React.FC = () => {
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
      <AppButton
        bgColor="primary"
        title="Click me"
        color="#fff"
        onPress={() => Alert.alert('onPress()')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
});
