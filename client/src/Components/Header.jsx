import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./main";
import { ThemeContext } from "./ThemeContext"; 
import { BiMenu, BiX, BiSun, BiMoon } from "react-icons/bi";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { toast } from "react-toastify";

function Header() {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const { theme, toggleTheme } = useContext(ThemeContext); 
  const navigateTo = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  const handleNavigate = (path) => {
    navigateTo(path);
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const handleLogout = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5757/api/v1/user/litigant/logout",
        { withCredentials: true }
      );
      toast.success(res.data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
      setMenuOpen(false);
      setDropdownOpen(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Logout failed");
    }
  };

  const handleSettings = () => setDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        desktopRef.current &&
        !desktopRef.current.contains(e.target) &&
        mobileRef.current &&
        !mobileRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/aboutus" },
    { label: "Lawyer", path: "/lawyer" },
    { label: "Consultation", path: "/consulation" },
  ];

  return (
    <header className="w-full bg-[var(--bg)] text-[var(--text)] shadow-lg fixed top-0 left-0 z-50 transition-colors">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div
          onClick={() => handleNavigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="https://svgsilh.com/svg_v2/450202.svg"
            alt="Legal Sathi"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold text-orange-500 hover:text-orange-700 transition-colors font-sans dark:text-orange-300">
            Legal Sathi
          </h1>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              className="text-[var(--text)] font-medium hover:text-[var(--primary)] transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}

          <div
            ref={desktopRef}
            className="relative flex items-center gap-3 border-l border-gray-300 dark:border-gray-700 pl-4"
          >
            <button
              onClick={handleSettings}
              className="p-1 rounded hover:bg-[var(--secondary)] transition"
            >
              <AccountCircleIcon className="text-orange-600 dark:text-orange-400" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-12 w-44 bg-[var(--bg)] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50 animate-fadeIn">
                <ul className="py-2 text-[var(--text)]">
                  <li
                    onClick={() => handleNavigate("/profile")}
                    className="px-4 py-2 hover:bg-[var(--secondary)] cursor-pointer transition"
                  >
                    Profile
                  </li>
                  <li
                    onClick={toggleTheme}
                    className="px-4 py-2 hover:bg-[var(--secondary)] cursor-pointer transition flex items-center gap-2"
                  >
                    {theme === "light" ? <BiMoon /> : <BiSun />}
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                  </li>
                </ul>
              </div>
            )}

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-red-600 dark:text-red-400 font-medium hover:text-red-500 transition-colors duration-300"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => handleNavigate("/login")}
                className="text-[var(--text)] font-medium hover:text-[var(--primary)] transition-colors duration-300"
              >
                Login
              </button>
            )}
          </div>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              setDropdownOpen(false);
            }}
            className="text-[var(--text)] focus:outline-none"
          >
            {menuOpen ? <BiX size={30} /> : <BiMenu size={30} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-[var(--bg)] fixed top-[72px] left-0 w-full h-screen transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-xl`}
      >
        <div className="flex flex-col space-y-6 p-6">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              className="text-lg text-[var(--text)] font-medium hover:text-[var(--primary)] transition-colors duration-300 text-left"
            >
              {item.label}
            </button>
          ))}

          <div className="pt-6 border-t border-gray-300 dark:border-gray-700">
            <div ref={mobileRef} className="relative">
              <button
                onClick={handleSettings}
                className="flex items-center gap-3 text-left w-full"
              >
                <AccountCircleIcon className="text-orange-600 dark:text-orange-400" />
                <span className="text-[var(--text)] font-semibold">
                  {isAuthenticated ? "Account" : "Guest"}
                </span>
              </button>

              {dropdownOpen && (
                <div className="mt-3 bg-[var(--bg)] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm w-full animate-fadeIn">
                  <ul className="py-2 text-[var(--text)]">
                    <li
                      onClick={() => handleNavigate("/profile")}
                      className="px-4 py-2 hover:bg-[var(--secondary)] cursor-pointer transition"
                    >
                      Profile
                    </li>
                    <li
                      onClick={toggleTheme}
                      className="px-4 py-2 hover:bg-[var(--secondary)] cursor-pointer transition flex items-center gap-2"
                    >
                      {theme === "light" ? <BiMoon /> : <BiSun />}
                      {theme === "light" ? "Dark Mode" : "Light Mode"}
                    </li>
                    <li className="px-4 py-2">
                      {isAuthenticated ? (
                        <button
                          onClick={handleLogout}
                          className="text-red-600 dark:text-red-400 font-medium hover:text-red-500 transition"
                        >
                          Logout
                        </button>
                      ) : (
                        <button
                          onClick={() => handleNavigate("/login")}
                          className="text-[var(--text)] font-medium hover:text-[var(--primary)] transition"
                        >
                          Login
                        </button>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
