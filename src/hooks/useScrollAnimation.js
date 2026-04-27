import { useEffect, useRef, useState, useCallback } from "react";

export const useScrollAnimation = (threshold = 0.15) => {
  const ref = useRef(null);
  const [is_visible, setIsVisible] = useState(false);

  const handleIntersection = useCallback((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin: "0px 0px -50px 0px",
    });

    const current_ref = ref.current;
    if (current_ref) {
      observer.observe(current_ref);
    }

    return () => {
      if (current_ref) {
        observer.unobserve(current_ref);
      }
    };
  }, [handleIntersection, threshold]);

  return { ref, is_visible };
};
