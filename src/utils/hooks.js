import { useLayoutEffect, useEffect } from 'react';
import { useLocation } from '@reach/router';

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
  const location = useLocation();

  useEffect(() => {
    if (typeof zE !== 'function') {
      return;
    }

    if (open) {
      // eslint-disable-next-line no-undef
      zE('webWidget', 'hide');
    }

    // Leave Zendesk widget hidden on a product's page. It obstructs the `Add to Cart` on mobile.
    if (location.pathname.includes('/products/')) {
      return;
    }

    return () => {
      // eslint-disable-next-line no-undef
      zE('webWidget', 'show');
    };
  }, [open, location]);
}
