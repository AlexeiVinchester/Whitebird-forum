import { configureStore } from '@reduxjs/toolkit';
import { 
    persistStore, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import { persistedReducer } from './persistedReducer';

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, 'modalWindow/openModalWindow'],
              ignoredActionPaths: ['payload.data'],
              ignoredPaths: ['modalWindow.data'],
          },
      }),
        
});

export const persistor = persistStore(store);