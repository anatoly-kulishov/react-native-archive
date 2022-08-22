import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Link } from '@react-navigation/native';

import { getProductsState } from '../store/selectors/products-selectors';
import { useActions, useTypedSelector } from '../store';
import { MainRoutesEnum } from '../shared/types';
import { AppButton } from './ui/AppButton';
import { theme } from '../configs/theme';
import { AppText } from './ui/AppText';

export const ProductsList: React.FC = () => {
  const { allProducts, status, error } = useTypedSelector(getProductsState);
  const { loadProductsThunk, clearLoadedProductsAC } = useActions();
  const haveProducts: boolean = !!allProducts.length;
  const isLoading: boolean = status === 'loading';

  const loadProductsHandler = (limit?: number) => () => {
    loadProductsThunk(limit);
  };

  return (
    <>
      <AppButton
        type="primary"
        title="Load Products"
        disabled={isLoading}
        onPress={loadProductsHandler(3)}
        style={styles.loadButton}
      />
      <AppButton
        type="danger"
        title="Clear"
        disabled={isLoading || !status || !haveProducts}
        onPress={clearLoadedProductsAC}
      />
      <View style={styles.productsList}>
        {status === 'accepted' &&
          haveProducts &&
          allProducts?.map(product => (
            <Link
              to={`/${MainRoutesEnum.HOME}`}
              key={product.id}
              style={styles.productLink}>
              {product.title}
            </Link>
          ))}
        {status === 'accepted' && !haveProducts && (
          <AppText style={styles.noDataTitle}>Empty</AppText>
        )}
        {!status && <AppText style={styles.noDataTitle}>No data</AppText>}
        {isLoading && <AppText style={styles.noDataTitle}>Loading...</AppText>}
        {status === 'denied' && (
          <AppText style={styles.noDataTitle}>{error}</AppText>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  productsList: {
    padding: 15,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: theme.colorGrey,
    borderRadius: 15,
  },
  noDataTitle: {
    textAlign: 'center',
    color: theme.colorBlue,
  },
  productLink: {
    marginVertical: 5,
    fontSize: theme.fontSize12,
    color: theme.colorBlue,
  },
  loadButton: {
    marginBottom: 10,
  },
});
