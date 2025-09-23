import { Button } from "@/components/Button";
import { theme } from "@/theme";
import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Box, Divider, Drawer, IconButton, Modal, Toolbar } from "@mui/material";
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

const drawerWidth = "100vw";
const navItems = ["Design", "Photography", "About"];

export const Header = ({ backgroundColor }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<false | "design" | "photography">(false);

  const isParkvolt = backgroundColor === theme.palette.parkvoltYellow.main;
  const textColor = isParkvolt ? theme.palette.textMain.main : theme.palette.primary.main;

  const handleMobileDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // --- MOBILE DRAWER ---
  const mobileDrawer = (
    <Box sx={{ textAlign: "left", height: "100%", px: 2, pt: 2 }}>
      {/* Top Row with SIMONA + Close Button */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Button
          sx={{
            fontSize: theme.typography.title.fontSize,
            fontWeight: theme.typography.title.fontWeight || 700,
            color: theme.palette.primary.main,
            "&:hover": { textDecoration: "none" }
          }}
          onClick={() => (window.location.href = "/")}
        >
          SIMONA
        </Button>
        <IconButton onClick={handleMobileDrawerToggle} sx={{ color: theme.palette.primary.main }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />

      {/* Design Section */}
      <Button
        sx={{
          fontSize: "54px",
          fontWeight: theme.typography.h2.fontWeight || 700,
          color: theme.palette.secondary.main,
          textAlign: "left",
          width: "100%",
          justifyContent: "flex-start",
          mt: 3,
          mb: 1,
          lineHeight: 1.1
        }}
        onClick={() => (window.location.href = "/design")}
      >
        Design
      </Button>
      <Box sx={{ pl: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        {designLinks.map((link) => (
          <Button
            key={link.label}
            sx={{
              fontSize: theme.typography.h2.fontSize,
              fontWeight: theme.typography.h2.fontWeight || 700,
              color: theme.palette.primary.main,
              textAlign: "left",
              width: "100%",
              justifyContent: "flex-start"
            }}
            onClick={() => (window.location.href = link.href)}
          >
            {link.label}
          </Button>
        ))}
      </Box>

      {/* Photography Section */}
      <Button
        sx={{
          fontSize: "54px",
          fontWeight: theme.typography.h2.fontWeight || 700,
          color: theme.palette.secondary.main,
          textAlign: "left",
          width: "100%",
          justifyContent: "flex-start",
          mt: 3,
          mb: 1,
          lineHeight: 1.1
        }}
        onClick={() => (window.location.href = "/photography")}
      >
        Photography
      </Button>
      <Box sx={{ pl: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        {photographyLinks.map((link) => (
          <Button
            key={link.label}
            sx={{
              fontSize: theme.typography.h2.fontSize,
              fontWeight: theme.typography.h2.fontWeight || 700,
              color: theme.palette.primary.main, // Always use primary colour in drawer
              textAlign: "left",
              width: "100%",
              justifyContent: "flex-start"
            }}
            onClick={() => (window.location.href = link.href)}
          >
            {link.label}
          </Button>
        ))}
      </Box>

      {/* About Section */}
      <Button
        sx={{
          fontSize: "54px",
          fontWeight: theme.typography.h2.fontWeight || 700,
          color: theme.palette.secondary.main,
          textAlign: "left",
          width: "100%",
          justifyContent: "flex-start",
          mt: 3,
          lineHeight: 1.1
        }}
        onClick={() => (window.location.href = "/about")}
      >
        About
      </Button>
    </Box>
  );

  const container = typeof window !== "undefined" ? window.document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor }} elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Button
            sx={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: textColor,
              "&:hover": { textDecoration: "none" }
            }}
            onClick={() => (window.location.href = "/")}
          >
            SIMONA
          </Button>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleMobileDrawerToggle}
            sx={{ display: { sm: "none" }, color: textColor }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2, alignItems: "center", paddingX: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                variant="text"
                sx={{ fontSize: "1.25rem", fontWeight: 700, color: textColor, py: 4 }}
                onClick={
                  item === "Design"
                    ? () => setModalOpen("design")
                    : item === "Photography"
                      ? () => setModalOpen("photography")
                      : item === "About"
                        ? () => (window.location.href = "/about")
                        : undefined
                }
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Modals */}
      <NavModal open={modalOpen === "design"} onClose={() => setModalOpen(false)} links={designLinks} />
      <NavModal open={modalOpen === "photography"} onClose={() => setModalOpen(false)} links={photographyLinks} />

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleMobileDrawerToggle}
          anchor="right"
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgba(43,30,26,0.4)",
              backdropFilter: "blur(8px)"
            }
          }}
        >
          {mobileDrawer}
        </Drawer>
      </nav>
    </Box>
  );
};

const NavModal = ({ open, onClose, links }: { open: boolean; onClose: () => void; links: { label: string; href: string | null }[] }) => {
  const modalStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    bgcolor: "rgba(43,30,26,0.4)",
    backdropFilter: "blur(8px)",
    zIndex: 1300,
    pt: "64px",
    p: 0,
    m: 0
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle} onClick={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: 80,
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
                <Box key={link.href} sx={{ width: "100%", display: "flex", alignItems: "center", mb: 2 }}>
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
            <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "start" }}>
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
