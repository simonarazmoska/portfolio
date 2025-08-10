import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Box, Toolbar } from "@mui/material";

export const AppLayout = ({ backgroundColor, children }: { backgroundColor: string; children: React.ReactNode }) => {
  return (
    <>
      {/* Set textClassOverride to black text only if background is white or yellow */}
      <Header backgroundColor={backgroundColor} />
      <Box component="main">
        <Toolbar />
        {children}
      </Box>
      <Footer />
    </>
  );
};
