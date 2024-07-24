import { createBrowserRouter } from "react-router-dom";
import { DesignPage } from "./pages/design/page";
import { GlobalErrorPage } from "./pages/error/global";
import { HomePage } from "./pages/home/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <GlobalErrorPage />
  }
]);
