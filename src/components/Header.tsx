import { NavLink } from "react-router";
import { useLikes } from "../context/LikesContext";
import logo from "../assets/logo.svg";

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header>
      <div className="brand">
        <img src={logo} alt="" width={32} height={32} />
        <h1>{title}</h1>
      </div>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/register">Register</NavLink>
        <span className="likes-count">♥ {likes}</span>
      </nav>
    </header>
  );
}

export default Header;