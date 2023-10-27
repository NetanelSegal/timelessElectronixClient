import srcLogo from "../../../assets/timeless-logo.png";
import { Link } from "react-router-dom";
import Button from "../../button/Button";

const NavDesktop = ({ isConnected }) => {
  return (
    <div
      id="nav"
      className="flex h-14 flex-wrap items-center justify-between py-2 text-right"
    >
      <Link to={"/"}>
        <img className="h-8" src={srcLogo} alt="Timeless Electronix logo" />
      </Link>
      <ul className="flex items-center gap-3 font-semibold">
        <li className="hover:underline  active:scale-95">
          <Link to={"/uploadBox"}> העלאת ארגז</Link>
        </li>
        <li className="hover:underline  active:scale-95">
          <Link to={"/searchBox"}> חיפוש ארגז</Link>
        </li>
        <li className="hover:underline  active:scale-95">
          {isConnected ? (
            <Link to={"/register"}>
              <Button secondery text={"התנתקות"} />
            </Link>
          ) : (
            <Link to={"/register"}>
              <Button text={"התחברות"} />
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavDesktop;
