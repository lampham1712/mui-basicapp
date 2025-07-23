import React from "react";
import {
  Navigation,
  JobList,
  Pagination,
  AppThemeProvider,
  Layout,
  MainContent,
  useJobs,
  usePagination,
  useDarkMode,
} from "./components";

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { jobs, loading, error } = useJobs();
  const {
    currentPage,
    totalPages,
    currentItems: currentJobs,
    handlePageChange,
  } = usePagination(jobs, 5);

  if (loading) {
    return (
      <AppThemeProvider darkMode={darkMode}>
        <Layout>
          <Navigation darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
          <MainContent>
            <div>Loading jobs...</div>
          </MainContent>
        </Layout>
      </AppThemeProvider>
    );
  }

  if (error) {
    return (
      <AppThemeProvider darkMode={darkMode}>
        <Layout>
          <Navigation darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
          <MainContent>
            <div>Error loading jobs: {error}</div>
          </MainContent>
        </Layout>
      </AppThemeProvider>
    );
  }

  return (
    <AppThemeProvider darkMode={darkMode}>
      <Layout>
        <Navigation darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        <MainContent>
          <JobList jobs={currentJobs} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            totalItems={jobs.length}
            itemsPerPage={5}
          />
        </MainContent>
      </Layout>
    </AppThemeProvider>
  );
}

export default App;
