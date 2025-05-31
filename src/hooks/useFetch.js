import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * A hook for making fetch requests with status handling
 * @param {string} url - The URL to fetch
 * @param {Object} options - Fetch options
 * @returns {Object} - Returns { data, loading, error, refetch }
 */
const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);
  
  // Store url and options in refs to avoid dependency issues
  const urlRef = useRef(url);
  const optionsRef = useRef(options);
  
  // Update refs when props change
  useEffect(() => {
    urlRef.current = url;
    optionsRef.current = options;
  }, [url, options]);

  const fetchData = useCallback(async (fetchOptions = {}) => {
    // Abort previous request
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    // Create new AbortController
    const newController = new AbortController();
    controllerRef.current = newController;

    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(urlRef.current, {
        ...optionsRef.current,
        ...fetchOptions,
        signal: newController.signal
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Function to refetch the data
  const refetch = useCallback((fetchOptions = {}) => {
    fetchData(fetchOptions);
  }, [fetchData]);

  useEffect(() => {
    fetchData();
    
    return () => {
      // Cleanup: abort fetch on unmount
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, [fetchData]);

  return { data, loading, error, refetch };
};

export default useFetch;
