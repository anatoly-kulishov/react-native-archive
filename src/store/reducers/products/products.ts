import { ProductsActionType } from '../../action-types';
import { ProductsAction } from '../../actions';
import { IProduct, Nullable, RequestStatusEnum } from '../../../shared/types';

export interface IProductsInitialState {
  allProducts: IProduct[];
  status: Nullable<RequestStatusEnum>;
  error: Nullable<string>;
}

const initialState = {
  allProducts: [],
  status: null,
  error: null,
};

export const productsReducer = (
  state: IProductsInitialState = initialState,
  action: ProductsAction,
): IProductsInitialState => {
  switch (action.type) {
    case ProductsActionType.GET_ALL_PRODUCTS_START:
      return {
        ...state,
        status: RequestStatusEnum.LOADING,
      };
    case ProductsActionType.GET_ALL_PRODUCTS_ACCEPTED:
      return {
        ...state,
        status: RequestStatusEnum.ACCEPTED,
      };
    case ProductsActionType.GET_ALL_PRODUCTS_DENIED:
      return {
        ...state,
        status: RequestStatusEnum.DENIED,
        error: action.payload,
      };
    case ProductsActionType.SAVE_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        status: RequestStatusEnum.DENIED,
      };
    case ProductsActionType.CLEAR_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: [],
      };
    default:
      return state;
  }
};
