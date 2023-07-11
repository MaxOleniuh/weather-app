import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { HashRouter } from 'react-router-dom'
import { persistor } from './redux/store/index'
import { PersistGate } from 'redux-persist/integration/react'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter basename="/weather-app">
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
