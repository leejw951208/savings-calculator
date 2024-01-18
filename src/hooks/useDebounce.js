import { useCallback, useEffect, useState } from "react";

export default function useDebounce(callback, value, delay = 300) {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
}
