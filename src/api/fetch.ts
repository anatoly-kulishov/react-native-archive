import axios from './interceptors';
import { HttpMethods } from '../shared/types';

type TypeInput = {
  url: string;
  method?: HttpMethods;
  body?: object;
};

export const api = async ({ url, method = 'GET', body }: TypeInput) => {
  return axios({
    method,
    url,
    data: body,
  });
};
