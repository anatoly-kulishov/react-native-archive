import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AppTextInput } from '../components/ui/AppTextInput';
import { AppButton } from '../components/ui/AppButton';
import { useActions, useTypedSelector } from '../store';
import { getProductsState } from '../store/selectors/products-selectors';
import { HR } from '../components/ui/HR';
import { AppText } from '../components/ui/AppText';

export const UIKit: FC = () => {
  const { allProducts, loading } = useTypedSelector(getProductsState);
  const { loadProductsThunk } = useActions();

  console.log(allProducts, loading);

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
        // onPress={() => Alert.alert('onPress()')}
        onPress={loadProductsThunk}
      />
      {allProducts.map(product => (
        <AppText key={product.id}>{product.title}</AppText>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
});
