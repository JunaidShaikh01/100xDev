import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import ListPage from "./Components/ListPage";
import Form from "./Components/Form";
import { RecoilRoot } from "recoil";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/ListPage", element: <ListPage /> },
    { path: "/Form", element: <Form /> },
    { path: "/Form/:id", element: <Form /> },
  ]);

  return (
    <RecoilRoot>
      <RouterProvider router={router} />;
    </RecoilRoot>
  );
}
