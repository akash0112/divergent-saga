import { useState, useRef, useEffect } from 'react';

const useDebounce = (callback, delay) => {
  const [debouncedValue, setDebouncedValue] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      callback(debouncedValue);
    }, delay);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [debouncedValue, callback, delay]);

  const debounce = (value) => {
    setDebouncedValue(value);
  };

  return debounce;
};

export default useDebounce;
