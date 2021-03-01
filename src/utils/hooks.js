import { useLayoutEffect } from 'react';

export function useBodyScrollLock(open) {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (open) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [open]);
}
