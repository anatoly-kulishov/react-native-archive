import { Dispatch } from 'redux';

import { ProductsService } from '../../services/products/products.service';
import { ProductsActionType } from '../action-types';
import { ProductsAction } from '../actions';

export const loadProductsThunk = () => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    const { data } = await ProductsService.getAllProducts();
    dispatch({
      type: ProductsActionType.LOAD_ALL_PRODUCTS,
      payload: data,
    });
  };
};
