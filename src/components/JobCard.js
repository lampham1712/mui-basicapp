import React from "react";
import { Paper, Typography, Box, Button, Chip, Divider } from "@mui/material";
import {
  LocationOn as LocationIcon,
  AttachMoney as SalaryIcon,
} from "@mui/icons-material";

const JobCard = ({ job }) => {
  const formatSalary = (low, high) => {
    return `$${(low / 1000).toFixed(0)}k - $${(high / 1000).toFixed(0)}k`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        mb: 3,
        transition: "all 0.3s ease",
        "&:hover": {
          elevation: 4,
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "flex-start" },
          mb: 2,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            {job.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              gap: 2,
              mb: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LocationIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {job.city} {job.remote && "• Remote"}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <SalaryIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {formatSalary(job.salaryLow, job.salaryHigh)}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Posted: {formatDate(job.postedDate)}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {job.description}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {job.skills.slice(0, 4).map((skill, skillIndex) => (
            <Chip
              key={skillIndex}
              label={skill}
              size="small"
              variant="outlined"
              color="primary"
            />
          ))}
          {job.skills.length > 4 && (
            <Chip
              label={`+${job.skills.length - 4} more`}
              size="small"
              variant="outlined"
              color="secondary"
            />
          )}
        </Box>
        <Button variant="contained" size="small">
          Apply Now
        </Button>
      </Box>
    </Paper>
  );
};

export default JobCard;
