"use client";

import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    window.location.href = "/mn";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-neutral-charcoal">Redirecting...</p>
    </div>
  );
}
