import { createBrowserRouter } from "react-router-dom";
import { PlantwellPage } from "./pages/design/plantwell/page";
import { GlobalErrorPage } from "./pages/error/global";
import { HomePage } from "./pages/home/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <GlobalErrorPage />
  },
  {
    path: "design/plantwell",
    element: <PlantwellPage />,
    errorElement: <GlobalErrorPage />
  }
]);
