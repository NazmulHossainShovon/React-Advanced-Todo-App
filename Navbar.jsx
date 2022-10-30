import { Outlet, useNavigate } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const navigate = useNavigate();

  function handleOption(event) {
    switch (event.target.value) {
      case "---":
        const i = 1;
        break;
      case "all lists":
        navigate("/");
        break;
      case "overdues":
        navigate("overdues");
        break;
      default:
        return;
    }
  }

  return (
    <div>
      <div className="navbar">
        <select onClick={handleOption}>
          <option value="---">---</option>
          <option onClick={() => navigate("/")} value="all lists">
            All Lists
          </option>
          <option value="overdues">Overdues</option>
        </select>
      </div>
      <Outlet />
    </div>
  );
}
