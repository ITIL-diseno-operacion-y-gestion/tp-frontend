import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <svg
        className="h-8 w-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
      <span className="ml-2 text-xl font-bold text-gray-900">Logo</span>
    </Link>
  );
}
