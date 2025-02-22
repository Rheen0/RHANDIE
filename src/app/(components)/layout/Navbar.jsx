import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex fixed justify-around w-full z-50 p-5 bg-white/10 backdrop-blur-sm">
      <h2 className="text-white font-semibold ">RHANDIE</h2>
      <ul className="flex justify-center items-center gap-10 text-white">
        <Link href="/">
          <li className="hover:text-gray-700 transition-colors">HOME</li>
        </Link>

        <Link href="/about">
          <li className="hover:text-gray-700 transition-colors">ABOUT</li>
        </Link>

        <Link href="/projects">
          <li className="hover:text-gray-700 transition-colors">PROJECTS</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
