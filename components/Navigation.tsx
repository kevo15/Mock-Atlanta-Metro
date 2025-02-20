// components/Navigation.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../public/AtlantaNotariesLogo.png";

// Create your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#0d47a1", // Deep blue for links and border
    },
    secondary: {
      main: "#ffb300", // Gold
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif', // Headings
    body1: {
      fontFamily: '"Lora", serif', // Body text
    },
  },
});

// Navigation links data
const navLinks = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "Our Services", path: "/services" },
  { title: "Contact Us", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const themeContext = useTheme();
  const isMobile = useMediaQuery(themeContext.breakpoints.down("md"));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: 3,
        py: 0.5,
        borderBottom: `4px solid ${theme.palette.primary.main}`,
      }}
    >
      <Toolbar sx={{ px: 2 }}>
        {/* Logo & Brand */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link href="/" passHref legacyBehavior>
            <Box
              component="a"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                backgroundColor: "#fff",
                borderRadius: 10,
                p: 1,
                mt: 2,
                mb: 2,
                mx: 1,
              }}
            >
              <Image
                src={logo}
                alt="Atlanta Notaries Logo"
                width={200}
                height={100}
                style={{ objectFit: "contain" }}
                priority
              />
            </Box>
          </Link>
        </Box>

        {/* Mobile Menu */}
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="primary" // Changed from "inherit" to "primary"
              aria-label="menu"
              onClick={handleMenu}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              {navLinks.map((link) => (
                <MenuItem key={link.title} onClick={handleClose}>
                  <Link href={link.path} passHref legacyBehavior>
                    <Typography
                      textAlign="center"
                      sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        color: theme.palette.primary.main,
                        transition: "color 0.3s",
                        "&:hover": { color: theme.palette.secondary.main },
                      }}
                    >
                      {link.title}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          // Desktop Navigation
          <Box sx={{ mx: 2 }}>
            {navLinks.map((link) => (
              <Link key={link.title} href={link.path} passHref legacyBehavior>
                <Button
                  color="inherit"
                  sx={{
                    ml: 2,
                    fontFamily: '"Open Sans", sans-serif',
                    color: theme.palette.primary.main,
                    transition: "color 0.3s, transform 0.3s",
                    "&:hover": {
                      color: theme.palette.secondary.main,
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {link.title}
                </Button>
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

const Navigation: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
};

export default Navigation;
