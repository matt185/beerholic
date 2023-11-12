import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store/store'
import './styles/index.scss'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/*',
    element: <App />
  }
])




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

