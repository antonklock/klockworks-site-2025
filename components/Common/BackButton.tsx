"use client";

import Link from "next/link";

interface BackButtonProps {
  href?: string;
}

export default function BackButton({ href = "/" }: BackButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (href === "/") {
      e.preventDefault();
      window.location.href = "/#projects";
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="inline-flex items-center text-kwRed hover:underline mb-4"
    >
      ← Back
    </Link>
  );
}
