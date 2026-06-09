import Link from "next/link";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <header className="w-full min-h-16 h-full backdrop-blur-sm z-50 sticky top-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <Logo />
          <ul className="hidden md:flex items-center gap-x-8">
              <li>
                <Link
                  href="/"
                  className="text-sm font-medium text-primary-700 hover:text-primary-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/cabins"
                  className="text-sm font-medium text-primary-700 hover:text-primary-600 transition-colors"
                >
                  Cabins
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm font-medium text-primary-700 hover:text-primary-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  className="text-sm font-medium text-primary-700 hover:text-primary-600 transition-colors"
                >
                  Account
                </Link>
              </li>
            </ul>
        </nav>
      </div>
    </header>
  );
}
