import { IProduct } from '../../shared/types/product.types';
import { getProductsUrl } from '../../configs/api.config';
import instance from '../../api/interceptors';

export const ProductsService = {
  async getAllProducts(limit?: number) {
    return instance.get<IProduct[]>(
      getProductsUrl(limit ? `?limit=${limit}` : ''),
    );
  },
  async getProductById(id: number) {
    return instance.get<IProduct>(getProductsUrl(`/${id}`));
  },
  async deleteProductById(id: number) {
    await instance.delete<IProduct>(getProductsUrl(`/${id}`));
  },
};
