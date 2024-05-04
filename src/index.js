import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import index from './index.css'
import Store from './Store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={Store}>
      <App />
   </Provider>
      
   
);


