import { ProductsActionType } from '../action-types';
import { IProduct } from '../../shared/types';

export interface ILoadAllProductsAction {
  type: ProductsActionType.LOAD_ALL_PRODUCTS;
  payload: IProduct[];
}

export type ProductsAction = ILoadAllProductsAction;
