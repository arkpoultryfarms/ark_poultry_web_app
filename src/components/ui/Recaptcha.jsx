"use client";

import { useEffect, useRef } from "react";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function Recaptcha({ onChange }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const renderWidget = () => {
      if (cancelled || !containerRef.current || widgetIdRef.current !== null) return;
      if (!window.grecaptcha || !window.grecaptcha.render) return;

      widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
        callback: () => onChange?.(true),
        "expired-callback": () => onChange?.(false),
        "error-callback": () => onChange?.(false),
      });
    };

    if (window.grecaptcha && window.grecaptcha.render) {
      renderWidget();
      return () => {
        cancelled = true;
      };
    }

    const interval = setInterval(() => {
      if (window.grecaptcha && window.grecaptcha.render) {
        renderWidget();
        clearInterval(interval);
      }
    }, 300);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [onChange]);

  return <div ref={containerRef} />;
}
