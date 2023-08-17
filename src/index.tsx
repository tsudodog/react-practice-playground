import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import './index.css';
import store from './redux';
import reportWebVitals from './reportWebVitals';
import Contact from './routes/contact';
import MyTestPage from './routes/MyTestPage';
import Root, { loader as rootLoader } from './routes/root';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [{
      path: "contacts/:contactId",
      element: <Contact />
    }
    ]
  },
  {
    path: "contacts/:contactId",
    element: <Contact />
  },
  {
    path: "/my-test-page",
    element: <MyTestPage />
  }
]);

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
