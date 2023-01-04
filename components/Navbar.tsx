import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  currentPath: string;
}

export default function Navbar({ currentPath }: Props) {
  const paths = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
    { name: "About", url: "/about" },
  ];

  return (
    <nav className="text-2xl font-medium px-4 py-12 absolute left-0 right-0 top-0 z-20">
      <div className="max-w-6xl mx-auto">
        <ul className="flex gap-12 transition-colors duration-200">
          {paths.map(({ name, url }) => (
            <li key={name} className="relative">
              <Link href={url}>{name}</Link>
              {currentPath === url && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 h-[2px] bg-current w-full"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
