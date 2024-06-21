import * as React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import UsersListPage from "./pages/UserList/UserListPage";
import UserProfilePage from "./pages/UserProfile/UserProfilePage";
import AlbumPresentationPage from "./pages/AlbumPresentation/AlbumPresentationPage";
import './App.css'

const router = createBrowserRouter([
  {
    path: "/users",
    element: <UsersListPage />,
  },
  {
    path: "/",
    element: <Navigate to="/users"/>,
  },
  {
    path: "/user/profile/:id",
    element: <UserProfilePage />,
  },
  {
    path: "/user/albums/:id",
    element: <AlbumPresentationPage />,
  },
]);

export default function App(){
  return <RouterProvider router={router} />
};
