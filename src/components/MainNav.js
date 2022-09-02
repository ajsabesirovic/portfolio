import classes from "./MainNav.module.css";
import { NavLink } from "react-router-dom";
const MainNav = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Ajsa Besirovic</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/">Work</NavLink>
          </li>
          <li>
            <a
              href="Resume-Ajsa-Besirovic.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNav;
