import { Button } from "@/components/Button";
import { theme } from "@/theme";
import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Modal, Toolbar } from "@mui/material";
import { useState } from "react";

interface HeaderProps {
  backgroundColor: string;
}

const designLinks = [
  { label: "Up & Go", href: "/design/up-and-go" },
  { label: "Plantwell", href: "/design/plantwell" },
  { label: "ParkVolt", href: "/design/parkvolt" },
  { label: "Dr. Wallet", href: "/design/dr-wallet" }
];

const photographyLinks = [
  { label: "Editorials", href: "/photography/editorials" },
  { label: "Campaigns", href: "/photography/campaigns" },
  { label: "Motion", href: "/photography/motion" }
];

const drawerWidth = 240;
const navItems = ["Design", "Photography", "About"];

export const Header = ({ backgroundColor }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<false | "design" | "photography">(false);

  const isParkvolt = backgroundColor === theme.palette.parkvoltYellow.main;
  const textColor = isParkvolt ? theme.palette.textMain.main : theme.palette.primary.main;

  const handleMobileDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const mobileDrawer = (
    <Box onClick={handleMobileDrawerToggle} sx={{ textAlign: "center" }}>
      <Button
        sx={{
          fontSize: "1.25rem",
          lineHeight: 0.24,
          letterSpacing: "0",
          fontWeight: 700,
          my: 2,
          py: 2,
          color: textColor,
          "&:hover": {
            textDecoration: "none"
          }
        }}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        SIMONA
      </Button>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                sx={{ fontSize: "1.25rem", lineHeight: 0.24, letterSpacing: "0", fontWeight: 700, my: 2, py: 2, color: textColor }}
                primary={item}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = typeof window !== "undefined" ? window.document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: backgroundColor }} elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleMobileDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Button
              sx={{
                fontSize: "1.25rem",
                lineHeight: 0.24,
                letterSpacing: "0",
                fontWeight: 700,
                my: 2,
                py: 2,
                display: { xs: "none", sm: "block" },
                color: textColor,
                "&:hover": {
                  textDecoration: "none"
                }
              }}
              onClick={() => {
                window.location.href = "/";
              }}
            >
              SIMONA
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2, alignItems: "center", paddingX: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                variant="text"
                sx={{ fontSize: "1.25rem", lineHeight: 0.24, letterSpacing: "0", fontWeight: 700, color: textColor, py: 4 }}
                onClick={
                  item === "Design Work" || item === "Design"
                    ? () => setModalOpen("design")
                    : item === "Photography"
                      ? () => setModalOpen("photography")
                      : item === "About"
                        ? () => {
                            window.location.href = "/about";
                          }
                        : undefined
                }
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <NavModal open={modalOpen === "design"} onClose={() => setModalOpen(false)} links={designLinks} />
      <NavModal open={modalOpen === "photography"} onClose={() => setModalOpen(false)} links={photographyLinks.filter((l) => l.href)} />
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleMobileDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
          }}
        >
          {mobileDrawer}
        </Drawer>
      </nav>
    </Box>
  );
};

// Abstracted modal
const NavModal = ({ open, onClose, links }: { open: boolean; onClose: () => void; links: { label: string; href: string | null }[] }) => {
  // Modal styles
  const modalStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    bgcolor: "rgba(43,30,26,0.4)", // textMain with 40% opacity
    backdropFilter: "blur(8px)",
    zIndex: 1300,
    pt: "64px", // below header
    p: 0,
    m: 0
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle} onClick={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: 80, // header height + spacing
            right: 0,
            minWidth: 320,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 2,
            p: 4
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Box className="tw-flex tw-flex-row">
            {/* Links column */}
            <Box>
              {links.map((link) => (
                <Box
                  key={link.href}
                  sx={{ width: "100%", display: "flex", alignItems: "center", mb: 2 }}
                  className="tw-flex tw-flex-row tw-gap-6"
                >
                  <Button
                    sx={{
                      ...theme.typography.h1,
                      color: "#fff",
                      my: 1,
                      py: 2,
                      flex: 1,
                      justifyContent: "flex-start",
                      whiteSpace: "nowrap"
                    }}
                    href={link.href || undefined}
                  >
                    {link.label}
                  </Button>
                </Box>
              ))}
            </Box>
            {/* Close button column */}
            <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "start", mb: 0 }}>
              <IconButton aria-label="close" onClick={onClose} sx={{ color: "#fff", ml: 4, p: 2 }}>
                <CloseIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
