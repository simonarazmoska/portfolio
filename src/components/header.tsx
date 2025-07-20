import { ArrowForward, Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Typography
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = ({ backgroundColor, isOverWhite }: { backgroundColor: string; isOverWhite: boolean }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  // If isOverWhite, header is transparent and text/icons are dark. Else, header uses backgroundColor and text/icons are white.
  const appBarBg = isOverWhite ? "transparent" : backgroundColor;
  const textClass = isOverWhite ? "tw-text-secondary tw-font-title" : "tw-text-primary tw-font-title tw-text-white";
  const iconColor = isOverWhite ? "#231F21" : "#FFFFFF";

  return (
    <>
      <AppBar component="nav" position="sticky" sx={{ backgroundColor: appBarBg }} elevation={0}>
        <Toolbar className="tw-justify-between tw-bg-transparent" style={{ margin: 0 }}>
          <Button href="/">
            <Typography className={textClass}>SIMONA</Typography>
          </Button>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon style={{ color: iconColor }} />
          </IconButton>
          <Drawer
            PaperProps={{
              sx: { backgroundColor: "#231F21", width: "520px" }
            }}
            open={drawerOpen}
            anchor="right"
            onClose={handleDrawerToggle}
          >
            <div className="tw-h-screen">
              <div className="tw-px-8 tw-py-4 tw-pb-12">
                <div className="tw-justify-end tw-flex">
                  <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                    <Close style={{ color: "white" }} />
                  </IconButton>
                </div>
                {buildItem("Home", "/")}
              </div>
              <div className="tw-px-8 tw-bg-black">
                <p className="tw-text-secondary tw-font-semibold tw-text-2xl">DESIGN</p>
                <List>
                  {buildItem("Up & Go", "/design/up-and-go")}
                  {buildItem("Plantwell", "/design/plantwell")}
                  {buildItem("ParkVolt", "/design/parkvolt")}
                  {buildItem("Dr. Wallet", "/design/dr-wallet")}
                </List>
              </div>
            </div>
            <Box className="tw-pb-6">
              <Divider className="tw-bg-primary" style={{ marginBottom: 12 }} />
              <Box className="tw-space-y-4">
                <Box className="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-py-6 tw-px-2 tw-space-x-2">
                  <Link
                    underline="hover"
                    href="mailto:simona.razmoska@hotmail.com"
                    className="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-px-6"
                    sx={{
                      textDecorationColor: "primary",
                      "&:hover": {
                        textDecorationColor: "primary"
                      }
                    }}
                  >
                    <p className="tw-text-primary tw-text-base tw-px-2">Email</p>
                    <ArrowForward style={{ color: "#FFFFFF" }} fontSize="small" />
                  </Link>
                  <Link
                    underline="hover"
                    href="https://au.linkedin.com/in/simona-razmoska"
                    className="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-px-6"
                    rel="noopener noreferrer"
                    target="_blank"
                    sx={{
                      textDecorationColor: "primary",
                      "&:hover": {
                        textDecorationColor: "primary"
                      }
                    }}
                  >
                    <p className="tw-text-primary tw-text-base tw-px-2">LinkedIn</p>
                    <ArrowForward style={{ color: "#FFFFFF" }} fontSize="small" />
                  </Link>
                  <Link
                    underline="hover"
                    href="https://medium.com/@simonarazmoska"
                    className="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-px-6"
                    rel="noopener noreferrer"
                    target="_blank"
                    sx={{
                      textDecorationColor: "primary",
                      "&:hover": {
                        textDecorationColor: "primary"
                      }
                    }}
                  >
                    <p className="tw-text-primary tw-text-base tw-px-2">Medium</p>
                    <ArrowForward style={{ color: "#FFFFFF" }} fontSize="small" />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
};

const buildItem = (text: string, url: string) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };
  return (
    <ListItem disablePadding>
      <ListItemButton disableRipple onClick={handleClick}>
        <ListItemIcon>
          <ArrowForward style={{ color: "#ffffff" }} />
        </ListItemIcon>
        <p className="tw-text-white tw-text-[32px] tw-leading-[38.73px]">{text}</p>
      </ListItemButton>
    </ListItem>
  );
};
