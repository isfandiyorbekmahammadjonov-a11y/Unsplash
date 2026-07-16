import Navbar from "./companets/Navbar";
import React, { Children } from "react";
import MainLayout from "./layouts/MainLoyout";
import Home from "./companets/Home";
import Dowlands from "./companets/Dowlands";
import Like from "./companets/Like";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Modal from "./companets/Modal";
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
          path: "Dowlands",
          element: <Dowlands />,
        },
        {
          path: "link",
          element: <Like />,
        },
        {
          path: "/modal/:id",
          element: <Modal />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
