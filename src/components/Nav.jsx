import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <nav className="navbar sticky top-0 z-10 p-3 bg-gray-100 shadow">
        <div className="navbar-start">
          <Link to="/" className="text-2xl font-bold px-6">
            <span className="text-accent">Stradivarius</span>
          </Link>
        </div>
        <div className="navbar-end"></div>
        <div className="navbar-end">
          <Link to="/add" className="btn btn-accent btn-sm mx-1">
            Add Product
          </Link>
          <a onClick={handleLogout} className="btn btn-error btn-sm mx-1">
            Logout
          </a>
        </div>
      </nav>
    </>
  );
}
