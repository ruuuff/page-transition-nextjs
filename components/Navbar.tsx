import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="text-2xl font-medium relative z-20">
      <ul className="flex gap-12">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
