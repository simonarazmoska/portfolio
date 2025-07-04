import { DrWalletPage } from "@/pages/design/dr_wallet/page";
import { ParkVoltPage } from "@/pages/design/parkvolt/page";
import { PlantwellPage } from "@/pages/design/plantwell/page";
import { UpAndGoPage } from "@/pages/design/up_and_go/page";
import { GlobalErrorPage } from "@/pages/error/global";
import { HomePage } from "@/pages/home/page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <GlobalErrorPage />
  },
  {
    path: "design/drwallet",
    element: <DrWalletPage />,
    errorElement: <GlobalErrorPage />
  },
  {
    path: "design/parkvolt",
    element: <ParkVoltPage />,
    errorElement: <GlobalErrorPage />
  },
  {
    path: "design/plantwell",
    element: <PlantwellPage />,
    errorElement: <GlobalErrorPage />
  },
  {
    path: "design/up-and-go",
    element: <UpAndGoPage />,
    errorElement: <GlobalErrorPage />
  }
]);
