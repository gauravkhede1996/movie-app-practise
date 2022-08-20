import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import App from './component/App';
import './index.css';
import movies from './reducer';

const store=createStore(movies);
// console.log("store: ",store);
// console.log("Before dispatch ",store.getState());
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'superman'}]
// });
// console.log("After dispatch ",store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);
