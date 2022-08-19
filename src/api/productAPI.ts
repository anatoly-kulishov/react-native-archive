import { baseInstance } from './instances';

const productAPI = {
  getAllProducts: () => {
    return baseInstance.post('/products').then(res => res.data);
  },
};

export default productAPI;
