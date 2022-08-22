import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';

const middleware = [thunk];

let storeOption = createStore(reducers, applyMiddleware(...middleware));

export const store = storeOption;
