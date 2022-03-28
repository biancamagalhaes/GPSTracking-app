import {Store, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootState, rootReducer} from '../ducks';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'local', 'socket', 'user'],
};

export function configureStore(initialState?: RootState): {
  store: Store<RootState>;
  persistor: any;
} {
  let middleware = applyMiddleware(thunk);

  // @ts-ignore
  const persistedReducer = persistReducer(persistConfig as any, rootReducer);

  const store = createStore(
    persistedReducer as any,
    initialState || ({} as any),
    middleware,
  ) as Store<RootState>;
  let persistor = persistStore(store);

  return {store, persistor};
}
