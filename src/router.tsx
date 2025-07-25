import { AppLayout } from "@/appLayout";
import { AboutPage } from "@/pages/about/page";
import { DrWalletPage } from "@/pages/design/dr_wallet/page";
import { DesignLandingPage } from "@/pages/design/landing/page";
import { ParkVoltPage } from "@/pages/design/parkvolt/page";
import { PlantwellPage } from "@/pages/design/plantwell/page";
import { UpAndGoPage } from "@/pages/design/up_and_go/page";
import { GlobalErrorPage } from "@/pages/error/global";
import { HomePage } from "@/pages/home/page";
import { PhotographyLandingPage } from "@/pages/photography/landing/page";
import { theme } from "@/theme";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout backgroundColor={theme.palette.orange.main}>
        <HomePage />
      </AppLayout>
    ),
    errorElement: (
      <AppLayout backgroundColor={theme.palette.black.main}>
        <GlobalErrorPage />
      </AppLayout>
    )
  },
  {
    path: "design",
    element: (
      <AppLayout backgroundColor={theme.palette.textMain.main}>
        <DesignLandingPage />
      </AppLayout>
    ),
    errorElement: (
      <AppLayout backgroundColor={theme.palette.black.main}>
        <GlobalErrorPage />
      </AppLayout>
    )
  },
  {
    path: "design/dr-wallet",
    element: (
      <AppLayout backgroundColor={theme.palette.drWalletNavy.main}>
        <DrWalletPage />
      </AppLayout>
    ),
    errorElement: (
      <AppLayout backgroundColor={theme.palette.black.main}>
        <GlobalErrorPage />
      </AppLayout>
    )
  },
  {
    path: "design/parkvolt",
    element: (
      <AppLayout backgroundColor={theme.palette.parkvoltYellow.main}>
        <ParkVoltPage />
      </AppLayout>
    ),
    errorElement: (
      <AppLayout backgroundColor={theme.palette.black.main}>
        <GlobalErrorPage />
      </AppLayout>
    )
  },
  {
    path: "design/plantwell",
    element: (
      <AppLayout backgroundColor={theme.palette.plantwellGreen.main}>
        <PlantwellPage />
      </AppLayout>
    ),
    errorElement: (
      <AppLayout backgroundColor={theme.palette.black.main}>
        <GlobalErrorPage />
      </AppLayout>
    )
  },
  {
    path: "design/up-and-go",
    element: (
      <AppLayout backgroundColor={theme.palette.sanitariumBlue.main}>
        <UpAndGoPage />
      </AppLayout>
    ),
    errorElement: (
      <AppLayout backgroundColor={theme.palette.black.main}>
        <GlobalErrorPage />
      </AppLayout>
    )
  },
  {
    path: "photography",
    element: (
      <AppLayout backgroundColor={theme.palette.textMain.main}>
        <PhotographyLandingPage />
      </AppLayout>
    ),
    errorElement: (
      <AppLayout backgroundColor={theme.palette.black.main}>
        <GlobalErrorPage />
      </AppLayout>
    )
  },
  //  TODO photography pages
  {
    path: "about",
    element: (
      <AppLayout backgroundColor={theme.palette.textMain.main}>
        <AboutPage />
      </AppLayout>
    ),
    errorElement: (
      <AppLayout backgroundColor={theme.palette.black.main}>
        <GlobalErrorPage />
      </AppLayout>
    )
  }
]);
