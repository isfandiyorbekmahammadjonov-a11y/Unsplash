import Navbar from "./companets/Navbar";
import React, { Children } from "react";
import MainLayout from "./layouts/MainLoyout";
import Home from "./companets/Home";
import About from "./companets/About";
import Contact from "./companets/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
