import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <header className="border-b-2  py-6 shadow-sm bg-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          to="/"
          className="text-5xl italic font-black tracking-tight text-red-500 hover:text-orange-500 transition-colors duration-200"
          style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.02em' }}
        >
          Zing Bites
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
