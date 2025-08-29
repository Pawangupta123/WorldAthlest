import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/Layout/AppLayout";
import Home from "./pages/Home";
import { About } from "./pages/About";
import Contect from './pages/Contect'
import Country from './pages/Country'
import ErrorPage from './pages/ErrorPage'
import CountryDeatils from "./components/Layout/CountryDeatils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/country/:id", //dynmic route
        element: <CountryDeatils />,
      },
       {
        path: "/contect",
        element: <Contect />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
