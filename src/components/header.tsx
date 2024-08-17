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

export const Header = () => {
  const [value, setValue] = useState<"design" | "photography">("design");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <AppBar component="nav" position="sticky">
      <Toolbar className="tw-bg-nearblack tw-justify-between" style={{ margin: 0 }}>
        <Button href="/">
          <Typography className="tw-text-lavender tw-font-[500]">SIMONA RAZMOSKA</Typography>
        </Button>
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={() => handleDrawerToggle()}>
          <MenuIcon />
        </IconButton>
        <Drawer
          PaperProps={{ sx: { backgroundColor: "#151515" } }}
          open={drawerOpen}
          anchor="right"
          // hideBackdrop={true}
          onClose={() => handleDrawerToggle()}
        >
          <div className="tw-h-screen">
            <div className="tw-px-8 tw-py-4">
              <div className="tw-justify-end tw-flex">
                <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={() => handleDrawerToggle()}>
                  <Close style={{ color: "#FFFFFF" }} />
                </IconButton>
              </div>
              {buildItem("Home", "/")}
            </div>
            <div className="tw-px-8 tw-bg-nearblack">
              <p className="tw-text-lavender tw-text-2xl">Design</p>
              <List className="">
                {buildItem("Plantwell", "/design/plantwell")}
                {buildItem("ParkVolt", "/design/parkvolt")}
                {buildItem("Dr. Wallet", "/design/drwallet")}
                {buildItem("Vin Diemen", "/design/vin-diemen")}
                {buildItem("Book Series", "/design/book-series")}
              </List>
            </div>
          </div>
          <Box className="tw-pb-6">
            <Divider className="tw-bg-white" style={{ marginBottom: 10 }} />
            <Box className="tw-space-y-4">
              <Box className="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-py-6 tw-px-2 tw-space-x-2">
                <Link href="mailto:simona.razmoska@hotmail.com" className="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-px-6">
                  <p className="tw-text-white tw-text-base tw-px-2">Email</p>
                  <ArrowForward style={{ color: "#FFFFFF" }} fontSize="small" />
                </Link>

                <Link
                  href="https://au.linkedin.com/in/simona-razmoska"
                  className="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-px-6"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p className="tw-text-white tw-text-base tw-px-2">LinkedIn</p>
                  <ArrowForward style={{ color: "#FFFFFF" }} fontSize="small" />
                </Link>

                <Link
                  href="https://medium.com/@simonarazmoska"
                  className="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-px-6"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p className="tw-text-white tw-text-base tw-px-2">Medium</p>
                  <ArrowForward style={{ color: "#FFFFFF" }} fontSize="small" />
                </Link>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

const buildItem = (text: string, url: string) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ArrowForward style={{ color: "#FFFFFF" }} />
        </ListItemIcon>
        <p className="tw-text-white tw-text-[32px] tw-leading-[38.73px]">{text}</p>
      </ListItemButton>
    </ListItem>
  );
};
