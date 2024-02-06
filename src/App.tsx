import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import AppLayout from "./layout/AppLayout";
import ErrorPage from "./pages/Errorpage/ErrorPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
