import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { isProduction } from 'config/config';
import vehiclesReducer from 'modules/vehicles/store/vehicles.reducer';

const rootReducer = combineReducers({
  vehicles: vehiclesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: !isProduction,
});
