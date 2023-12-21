import AnimateLayout from "../components/layouts/AnimateLayout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AnimateLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
