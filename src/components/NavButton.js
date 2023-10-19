import { NavLink } from "react-router-dom";

const NavButton = ({ to, name }) => (
  <NavLink
    to={to}
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : "App-Link"
    }
  >
    {name}
  </NavLink>
);

export default NavButton;
