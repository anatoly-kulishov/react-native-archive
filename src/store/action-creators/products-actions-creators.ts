import { Dispatch } from 'redux';

import { ProductsService } from '../../services/products/products.service';
import { ProductsActionType } from '../action-types';
import {
  IClearLoadedProductsAction,
  IGetLoadedProductsAcceptedAction,
  IGetLoadedProductsDeniedAction,
  IGetLoadedProductsStartAction,
  ISaveLoadedProductsAction,
  ProductsAction,
} from '../actions';
import { IProduct } from '../../shared/types/product.types';

export const saveLoadedProductsAC = (
  products: IProduct[],
): ISaveLoadedProductsAction => ({
  type: ProductsActionType.SAVE_ALL_PRODUCTS,
  payload: products,
});

export const clearLoadedProductsAC = (): IClearLoadedProductsAction => ({
  type: ProductsActionType.CLEAR_ALL_PRODUCTS,
});

export const getProductsStartAC = (): IGetLoadedProductsStartAction => ({
  type: ProductsActionType.GET_ALL_PRODUCTS_START,
});

export const getProductsAcceptedAC = (): IGetLoadedProductsAcceptedAction => ({
  type: ProductsActionType.GET_ALL_PRODUCTS_ACCEPTED,
});

export const getProductsDeniedAC = (
  error: string,
): IGetLoadedProductsDeniedAction => ({
  type: ProductsActionType.GET_ALL_PRODUCTS_DENIED,
  payload: error,
});

export const loadProductsThunk = (limit?: number) => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    dispatch(getProductsStartAC());
    try {
      const { data: products } = await ProductsService.getAllProducts(limit);
      dispatch(saveLoadedProductsAC(products));
      dispatch(getProductsAcceptedAC());
    } catch (e) {
      console.log('Error getting uploads for all subjects', e);
      dispatch(getProductsDeniedAC(String(e)));
    }
  };
};
