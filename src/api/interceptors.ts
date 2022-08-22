import axios from 'axios';

import { _apiBase } from '../configs/base.config';

const instance = axios.create({
  baseURL: _apiBase,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default instance;
