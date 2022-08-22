import { ProductsActionType } from '../../action-types';
import { ProductsAction } from '../../actions';
import { IProduct } from '../../../shared/types';

export interface IProductsInitialState {
  allProducts: IProduct[];
  loading: boolean;
}

const initialState = {
  allProducts: [],
  loading: true,
};

export const productsReducer = (
  state: IProductsInitialState = initialState,
  action: ProductsAction,
): IProductsInitialState => {
  switch (action.type) {
    case ProductsActionType.LOAD_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
