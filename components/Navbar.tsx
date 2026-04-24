import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Atlantic Painting Logo"
            width={40}
            height={40}
          />
          <span className="font-bold text-xl text-brand.primary">
            Atlantic Painting
          </span>
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-brand.primary">
            Home
          </Link>
          <Link href="/contact" className="hover:text-brand.primary">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
