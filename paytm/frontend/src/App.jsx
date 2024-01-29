import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import SignupPage, { action as signupAction } from "./pages/SignupPage";
import SigninPage, { action as signinAction } from "./pages/SigninPage";
import DashboardPage, {
  loader as dashboardLoader,
} from "./pages/DashboardPage";

const router = createBrowserRouter([
  { path: "/", element: <SigninPage />, action: signinAction },
  { path: "/signup", element: <SignupPage />, action: signupAction },
  { path: "/dashboard", element: <DashboardPage />, loader: dashboardLoader },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
