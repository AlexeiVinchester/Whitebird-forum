import { persistReducer } from 'redux-persist'
import { persistConfig } from './persistConfig'
import { rootReducer } from '../rootReducer'

export const persistedReducer = persistReducer(
    persistConfig, rootReducer
);