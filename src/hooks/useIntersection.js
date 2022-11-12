import { useCallback, useEffect, useState } from 'react';

const defaultOption = {
  root: null,
  threshold: 1.0,
  rootMargin: '20px',
};

const useIntersection = (element, option) => {
  const [isShow, setIsShow] = useState(false);

  const checkIntersection = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, []);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(checkIntersection, {
      ...defaultOption,
      ...option,
    });
    observer.observe(element);

    return () => {
      observer && observer.disconnect();
    };
  }, [element, checkIntersection, option]);

  return isShow;
};

export default useIntersection;
