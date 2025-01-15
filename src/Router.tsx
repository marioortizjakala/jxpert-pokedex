import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { App } from "./App";

const routes = {
  home: {
    path: "/",
    element: App,
  },
};

const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: Object.values(routes).map(({ element: Element, path }) => ({
      path,
      element: <Element />,
    })),
  },
  { path: "*", element: <div className="notfound">Page not found</div> },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
