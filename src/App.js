import React from 'react';
import './App.css';
import Main from './Routing';
import {
  Provider
} from 'react-redux';
import store from './Store';
function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
