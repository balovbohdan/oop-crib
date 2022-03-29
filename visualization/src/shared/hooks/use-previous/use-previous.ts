import { useRef, useEffect } from 'react';

const usePrevious = (value: any) => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
