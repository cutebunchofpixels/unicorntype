import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import ErrorPage from './routes/ErrorPage';
import Settings from './routes/Settings';
import About from './routes/About';
import Home from './routes/Home';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Global />
    <RouterProvider router={router} />
  </>
);
