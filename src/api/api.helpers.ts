import { AxiosError } from 'axios';

export const errorCatch = (error: AxiosError<any>): string => {
  if (error.response && error.response.data) {
    if (typeof error.response.data === 'object') {
      return error.response.data[0];
    }
    return error.response.data;
  }
  return error.message;
};

export const getContentType = () => ({
  'Content-Type': 'application/json',
});
