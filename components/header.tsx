import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-12 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="hidden md:flex gap-x-10 border border-slate-300 rounded-full py-4 px-8 relative backdrop-blur-md bg-slate-300/30">
        <Link href="/" className="hover:text-slate-300 transition-colors">
          Home
        </Link>
        <Link
          href="/projects"
          className="hover:text-slate-300 transition-colors"
        >
          Projects
        </Link>
        <Link href="/" className="hover:text-slate-300 transition-colors">
          About me
        </Link>
        <Link href="/" className="hover:text-slate-300 transition-colors">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
