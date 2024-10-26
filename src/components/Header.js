import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-end  p-2 opacity-75 shadow-md z-20 mr-10">
      {/* Navigation Links */}
      <nav className="flex space-x-5">
        <Link to="/" className="text-white hover:underline">Home</Link>
        <Link to="/about" className="text-white hover:underline">About Me</Link>
        <Link to="/projects" className="text-white hover:underline">Projects</Link>
        <Link to="/contact" className="text-white hover:underline">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;