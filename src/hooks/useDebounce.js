import { useState, useEffect } from 'react';

/**
 * @param {any} value
 * @param {number} delay
 * @returns {any}
 */
export function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}