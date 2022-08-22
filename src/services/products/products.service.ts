import { IProduct } from '../../shared/types';
import { getProductsUrl } from '../../configs/api.config';
import instance from '../../api/interceptors';

export const ProductsService = {
  async getAllProducts() {
    return instance.get<IProduct[]>(getProductsUrl(''));
  },
  async getProductById(id: number) {
    return instance.get<IProduct>(getProductsUrl(`/${id}`));
  },
  async deleteProductById(id: number) {
    await instance.delete<IProduct>(getProductsUrl(`/${id}`));
  },
};
