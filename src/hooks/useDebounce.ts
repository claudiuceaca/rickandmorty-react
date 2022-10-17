import { useState, useEffect } from "react";

const useDebounce = (val:string, time:number) => {
  const [debouncedValue, setDebouncedValue] = useState(val);

  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      setDebouncedValue(val);
    }, time);

    return () => {
      clearTimeout(timeoutRef);
    };
  }, [val,time]);

  return debouncedValue;
};

export default useDebounce;