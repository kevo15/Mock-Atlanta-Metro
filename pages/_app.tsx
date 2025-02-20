// pages/_app.tsx
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navigation from "../components/Navigation";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3743bd",
    },
    background: {
      default: "#bfc3ea",
    },
  },
  typography: {
    h3: {
      fontWeight: 600,
      color: "#3743bd",
    },
    h5: {
      color: "#3743bd",
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Navigation appears on every page */}
      <Navigation />

      {/* Render the main page component */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
