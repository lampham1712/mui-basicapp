import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const AppThemeProvider = ({ darkMode, children }) => {
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
    },
    typography: {
      h4: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 500,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
