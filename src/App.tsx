import React from 'react';
import StatusBar from './molecules/StatusBar';
import AppRoutes from './routes';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Provider} from 'react-redux';
import {configureStore} from './store';
import {RootState} from './ducks';

const {store, persistor} = configureStore({} as RootState);

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor="#000066" barStyle="light-content" />
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
};

export default App;
