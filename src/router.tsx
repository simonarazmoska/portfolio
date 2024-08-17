import { BookSeriesPage } from "@/pages/design/book_series/page";
import { DrWalletPage } from "@/pages/design/dr_wallet/page";
import { ParkVoltPage } from "@/pages/design/parkvolt/page";
import { PlantwellPage } from "@/pages/design/plantwell/page";
import { VinDiemenPage } from "@/pages/design/vin_diemen/page";
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
    path: "design/book-series",
    element: <BookSeriesPage />,
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
    path: "design/vin-diemen",
    element: <VinDiemenPage />,
    errorElement: <GlobalErrorPage />
  }
  // }
]);
