import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Root from './Root'
import Admin from './AdminPage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizzPage from './QuizPage'
import { Provider } from "hooks-for-redux";


const router = createBrowserRouter([
  {
    element: <Root />,
    path: "/",
    children: [
      {
        path: "/",
        element: <QuizzPage />,
      },
      {
        path: "admin",
        element: <Admin />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider>
 <React.StrictMode>
  <App/>
  <RouterProvider router={router} />
</React.StrictMode>
</Provider>
)
