"use client";

import { useEffect, useRef } from "react";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

// If the site key isn't configured (e.g. missing env var in this deploy),
// forms should still work rather than silently blocking every submission.
export const RECAPTCHA_ENABLED = Boolean(RECAPTCHA_SITE_KEY);

export default function Recaptcha({ onChange }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) {
      console.warn(
        "Recaptcha: NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set — skipping the widget and not requiring it on submit."
      );
      return;
    }

    let cancelled = false;

    const renderWidget = () => {
      if (cancelled || !containerRef.current || widgetIdRef.current !== null) return;
      if (!window.grecaptcha || !window.grecaptcha.render) return;

      try {
        widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          callback: () => onChange?.(true),
          "expired-callback": () => onChange?.(false),
          "error-callback": () => onChange?.(false),
        });
      } catch (err) {
        console.error("Recaptcha: failed to render widget", err);
      }
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

  if (!RECAPTCHA_SITE_KEY) return null;

  return <div ref={containerRef} />;
}
