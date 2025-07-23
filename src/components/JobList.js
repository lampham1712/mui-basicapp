import React from "react";
import { Box, Typography } from "@mui/material";
import JobCard from "./JobCard";

const JobList = ({ jobs, title = "Latest Job Opportunities" }) => {
  if (!jobs || jobs.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="h6" color="text.secondary">
          No jobs found
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        {title}
      </Typography>
      <Box sx={{ mb: 4 }}>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </Box>
    </Box>
  );
};

export default JobList;
