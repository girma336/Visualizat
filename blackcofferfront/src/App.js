import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import control from './assets/control.png';
import logo from './assets/logo.jpeg';
import Chart_fill from './assets/Chart_fill.png';
import Search from './assets/Search.png';
import Dashboard from "./pages/Dashboard";
import SearchPage from "./pages/SearchPage";

function App() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Chart_fill },
    { title: "Search", src: Search },
  ];

  return (
    <div className="flex">
      <Router>
        <div
          className={`bg-purple-800 h-screen p-5 pt-8 fixed left-0 top-0 bottom-0 duration-300 ${open ? "w-72" : "w-20"
            }`}
        >
          <img
            src={control}
            alt="contol.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-180"
              }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={logo}
              alt="logo"
              className={`w-[50px] h-[50px] rounded-2xl cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                }`}
            >
              BlackCoffer
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"
                  } ${index === 0 && "bg-light-white"}`}
              >
                
                <Link
                  to={`/${Menu.title}`}
                >
                  <img src={Menu.src} alt={Menu.title} />
                </Link>
                <Link
                  to={`/${Menu.title}`}
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={`h-screen flex-1 p-7 ${open ? 'ml-72' : 'ml-20'}`}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Search" element={<SearchPage open={open} />} />
        </Routes>
    </div>
      </Router >
    </div >
  );
}

export default App;