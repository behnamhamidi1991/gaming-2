import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import AppLayout from "./layout/AppLayout";
import ErrorPage from "./pages/Errorpage/ErrorPage";
import SingleProduction from "./pages/SingleProduction/SingleProduction";
import Dashboard from "./pages/Dashboard/Dashboard";
import Blog from "./pages/Blog/Blog";
import BlogSinglePost from "./pages/Blog/BlogSinglePost.tsx/BlogSinglePost";

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
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/license/:id",
        element: <SingleProduction />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogSinglePost />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
