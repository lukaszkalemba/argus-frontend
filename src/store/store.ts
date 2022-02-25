import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  PersistConfig,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { isProduction } from 'config/config';
import vehiclesReducer from 'modules/vehicles/store/vehicles.reducer';
import { IStoreState } from './store.types';

const persistConfig: PersistConfig<IStoreState> = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  vehicles: vehiclesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: !isProduction,
});

export const persistor = persistStore(store);
