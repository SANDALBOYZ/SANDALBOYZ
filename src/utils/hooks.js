import { useLayoutEffect, useEffect } from 'react';

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

// Used to hide the Zendesk widget when opening menus/carts/filters.
export function useHideZeWidget(open) {
  useEffect(() => {
    if (typeof zE !== 'function') {
      return;
    }

    if (open) {
      zE('webWidget', 'hide');
    }

    return () => {
      zE('webWidget', 'show');
    };
  }, [open]);
}
