"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-brand-yellow mb-4">404</div>
        <h1 className="text-2xl font-bold text-brand-dark mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-black bg-brand-yellow rounded-lg hover:bg-brand-yellow-hover transition-all duration-200"
          >
            Go Home
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-brand-dark border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
