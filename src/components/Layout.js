import React from "react";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return <Box sx={{ flexGrow: 1 }}>{children}</Box>;
};

export const MainContent = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
