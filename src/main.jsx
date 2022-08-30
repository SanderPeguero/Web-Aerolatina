import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

//New
import { BrowserRouter } from 'react-router-dom'

//Redux
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './Store/reducers/rootReducer'

//devtools
const composeEnhancers = typeof window == 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )



ReactDOM.createRoot(document.getElementById('root')).render(


  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>


)
