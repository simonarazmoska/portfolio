import { ArrowForward, Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { StyledButton } from "./button";

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <AppBar component="nav">
      <Toolbar className="tw-bg-headerBackground tw-justify-between" style={{ margin: 0 }}>
        <StyledButton>
          <Typography className={"tw-text-white"}>SIMONA RAZMOSKA</Typography>
        </StyledButton>
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={() => handleDrawerToggle()}>
          <MenuIcon />
        </IconButton>
        <Drawer
          PaperProps={{ sx: { backgroundColor: "#151515" } }}
          open={drawerOpen}
          anchor="right"
          hideBackdrop={true}
          onClose={() => handleDrawerToggle()}
        >
          <div className="tw-h-screen">
            <div className="tw-px-6 tw-py-4">
              <div className="tw-justify-end tw-flex">
                <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={() => handleDrawerToggle()}>
                  <Close style={{ color: "#FFFFFF" }} />
                </IconButton>
              </div>
              <p className="tw-underline tw-text-white tw-font-bold tw-text-4xl">HOME</p>
            </div>
            <div className="tw-px-6 tw-bg-headerBackground">
              <p className="tw-text-white tw-text-4xl">Design</p>
              <List className="">
                {buildItem("Plantwell")}
                {buildItem("ParkVolt")}
                {buildItem("Dr. Wallet")}
                {buildItem("Vin Diemen")}
                {buildItem("Book Series")}
              </List>
            </div>

          </div>
          <Box className="tw-pb-6">
            <Divider className="tw-bg-white" style={{ marginBottom: 10 }} />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                <p className="tw-text-white tw-text-base">Email</p>
                <ArrowForward style={{ color: "#FFFFFF" }} />
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                <p className="tw-text-white tw-text-base">LinkedIn</p>
                <ArrowForward style={{ color: "#FFFFFF" }} />
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                <p className="tw-text-white tw-text-base">Medium</p>
                <ArrowForward style={{ color: "#FFFFFF" }} />
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

const buildItem = (text: string, url: string) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <ArrowForward style={{ color: "#FFFFFF" }} />
        </ListItemIcon>
        <p className="tw-text-white tw-text-4xl">{text}</p>
      </ListItemButton>
    </ListItem>
  );
};
