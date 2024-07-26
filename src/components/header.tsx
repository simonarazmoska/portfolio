import { StyledButton } from "@/components/button";
import { ArrowForward, Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";

export const Header = () => {
  const [value, setValue] = useState<"design" | "photography">("design");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <AppBar component="nav" position="sticky">
      <Toolbar className="tw-bg-headerBackground tw-justify-between" style={{ margin: 0 }}>
        <StyledButton>
          <Typography className="tw-text-headerText tw-font-[500]">SIMONA RAZMOSKA</Typography>
        </StyledButton>
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
              {buildItem("Home")}
            </div>
            <div className="tw-px-8 tw-bg-headerBackground">
              <p className="tw-text-headerText tw-text-2xl">Design</p>
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
            <Box className="tw-space-y-4">
              <Box className="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-py-6 tw-px-2 tw-space-x-2">
                <Box className="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-px-6">
                  <p className="tw-text-white tw-text-base tw-px-2">Email</p>
                  <ArrowForward style={{ color: "#FFFFFF" }} fontSize="small" />
              </Box>

                <Box className="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-px-6">
                  <p className="tw-text-white tw-text-base tw-px-2">LinkedIn</p>
                  <ArrowForward style={{ color: "#FFFFFF" }} fontSize="small" />
              </Box>

                <Box className="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-px-6">
                  <p className="tw-text-white tw-text-base tw-px-2">Medium</p>
                  <ArrowForward style={{ color: "#FFFFFF" }} fontSize="small" />
                </Box>
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
        <p className="tw-text-white tw-text-[32px] tw-leading-[38.73px]">{text}</p>
      </ListItemButton>
    </ListItem>
  );
};
