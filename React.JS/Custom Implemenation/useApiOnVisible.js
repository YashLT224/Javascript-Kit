//Write hook to call api and when user switches tab and come again then call api again

import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to fetch data from an API when the component mounts
 * and when the user returns to the tab after switching away.
 *
 * @param {Function} apiCallFunction - The function that performs the API call. Should return a promise.
 * @param {Array} dependencies - Dependencies for the useEffect hook.
 * @returns {Object} - Contains data, loading, and error states.
 */
function useApiOnVisible(apiCallFunction, dependencies = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // To track if the component is mounted
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    // Function to fetch data
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await apiCallFunction();
        if (isMounted.current) {
          setData(result);
        }
      } catch (err) {
        if (isMounted.current) {
          setError(err);
        }
      } finally {
        if (isMounted.current) {
          setLoading(false);
        }
      }
    };

    // Initial data fetch on mount
    fetchData();

    // Handler for visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchData();
      }
    };

    // Add event listener for visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup function
    return () => {
      isMounted.current = false;
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { data, loading, error };
}

export default useApiOnVisible;
