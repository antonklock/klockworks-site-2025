import Link from "next/link";

interface BackButtonProps {
  href?: string;
}

export default function BackButton({ href = "/" }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center text-kwRed hover:underline mb-4"
    >
      ← Back
    </Link>
  );
}
