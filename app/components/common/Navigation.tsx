import Link from "next/link";
import Logo from "./Logo";
import { NavigationItems } from "../layout/navigation";

export default function Navigation() {
  return (
    <header className="w-full border-b border-primary-900 min-h-16 h-full backdrop-blur-sm z-50 px-8 sticky top-0 py-5">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <Logo />
          <ul className="hidden md:flex items-center gap-x-8">
            {NavigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="text-sm font-medium hover:text-accent-400 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
