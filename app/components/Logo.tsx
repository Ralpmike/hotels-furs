import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.png" alt="Logo" width={100} height={100} className="rounded-md" />
      <span className="text-primary-700 font-bold text-2xl">Hotels For You</span>
    </Link>
  );
}
