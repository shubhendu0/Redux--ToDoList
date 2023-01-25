import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/store/store";
import {persistor}  from "./redux/store/store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

store.subscribe(()=> {
  store.getState();
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>            
    </Provider>
  </React.StrictMode>
);

