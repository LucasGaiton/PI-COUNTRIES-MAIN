import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//importmas browserRouter 
import { BrowserRouter } from 'react-router-dom'

//Imports para la utilizacion de redux
import { store } from './Redux/store'
import { Provider } from 'react-redux'//PROVAIIIDERRR SE IMPORTA DE react-redux !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
