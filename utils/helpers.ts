import { useRef, useMemo } from "react";

/**
 * Function that returns the percentage scrolled by the user relative to the document full height
 * @returns {number} - Percentage scrolled (0-100)
 */

export const getScrollPercentage = (): number => {
  const h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";

  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
};
