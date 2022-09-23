import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import { Home } from "./Home/Home";
import { NotFoundPage } from "./NotFoundPage";

export const MainRouter: React.FC = function () {
  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <NotFoundPage /> },
  ]);
  return <RouterProvider router={router} />;
};
