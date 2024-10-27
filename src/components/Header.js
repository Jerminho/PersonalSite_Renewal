import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-center sm:justify-center p-2 opacity-75 shadow-md z-20 m-7">
      <nav className="flex space-x-5 justify-center w-full sm:justify-end">
        <Link to="/" className="text-white hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-white hover:underline">
          About Me
        </Link>

        <Link to="/contact" className="text-white hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
