import { ProductsActionType } from '../action-types';
import { IProduct } from '../../shared/types/product.types';

export interface ISaveLoadedProductsAction {
  type: ProductsActionType.SAVE_ALL_PRODUCTS;
  payload: IProduct[];
}

export interface IClearLoadedProductsAction {
  type: ProductsActionType.CLEAR_ALL_PRODUCTS;
}

export interface IGetLoadedProductsStartAction {
  type: ProductsActionType.GET_ALL_PRODUCTS_START;
}

export interface IGetLoadedProductsAcceptedAction {
  type: ProductsActionType.GET_ALL_PRODUCTS_ACCEPTED;
}

export interface IGetLoadedProductsDeniedAction {
  type: ProductsActionType.GET_ALL_PRODUCTS_DENIED;
  payload: string;
}

export type ProductsAction =
  | ISaveLoadedProductsAction
  | IClearLoadedProductsAction
  | IGetLoadedProductsStartAction
  | IGetLoadedProductsAcceptedAction
  | IGetLoadedProductsDeniedAction;
