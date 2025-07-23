import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
  showInfo = true,
}) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
          mt: 4,
        }}
      >
        <Button
          variant="outlined"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          sx={{ minWidth: 80 }}
        >
          Previous
        </Button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "contained" : "outlined"}
            onClick={() => onPageChange(page)}
            sx={{
              minWidth: 40,
              display: { xs: "none", sm: "inline-flex" },
            }}
          >
            {page}
          </Button>
        ))}

        <Typography
          variant="body2"
          sx={{
            display: { xs: "block", sm: "none" },
            mx: 2,
          }}
        >
          {currentPage} of {totalPages}
        </Typography>

        <Button
          variant="outlined"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          sx={{ minWidth: 80 }}
        >
          Next
        </Button>
      </Box>

      {showInfo && (
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Showing {indexOfFirstItem + 1}-
            {Math.min(indexOfLastItem, totalItems)} of {totalItems} items
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Pagination;
