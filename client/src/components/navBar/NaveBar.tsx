import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./NaveBar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src="/public/Logo.svg"
          alt="Logo du site web"
          className="logo-app"
        />
      </Link>
      <button
        type="button"
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <ul className={`menu-content ${isOpen ? "open" : ""}`}>
        <li ref={menuRef}>
          <Link to="/armes-a-feu">Les armes à feu</Link>
        </li>
        <li ref={menuRef}>
          <Link to="/armes-blanches">Les armes blanches</Link>
        </li>
        <li ref={menuRef}>
          <Link to="/explosifs">Les Explosifs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
