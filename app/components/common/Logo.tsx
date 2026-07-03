import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.png" alt="Logo" width={60} height={60} className="rounded-md" />
      <span className="font-semibold text-xl hover:text-accent-400  text-primary-100">Hotels For You</span>
    </Link>
  );
}
