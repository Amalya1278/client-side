import { createBrowserRouter } from "react-router-dom";
import { UserList } from "../pages/user-list";
import { AddUser } from "../pages/add-user";
import Layout from "../layout";
import { EditUser } from "../pages/edit-user";
import { UserDetails } from "../pages/user-details";

export const paths = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <UserList /> },
      { path: "add", element: <AddUser /> },
      { path: "users/edit/:id", element: <EditUser /> },
      { path: "users/details/:id", element: <UserDetails /> }, // Correct route
    ],
  },
]);
