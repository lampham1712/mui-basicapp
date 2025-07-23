import { useState, useEffect } from "react";

export const useJobs = (dataUrl = "/data.json") => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch(dataUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Error loading jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [dataUrl]);

  return { jobs, loading, error };
};

export const usePagination = (items, itemsPerPage = 5) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Reset to first page when items change
  useEffect(() => {
    setCurrentPage(1);
  }, [items.length]);

  return {
    currentPage,
    totalPages,
    currentItems,
    handlePageChange,
    indexOfFirstItem,
    indexOfLastItem,
  };
};
