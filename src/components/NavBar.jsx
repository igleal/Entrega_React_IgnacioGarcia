import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import CartWidget from "./CartWidget.jsx";

function NarBar() {
  const [isCategory, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((response) => setCategory(response));
  }, []);

  return (
    <nav className="bg-amber-800 p-4 flex justify-between items-center">
      <div>
        <span className="text-lg hover:text-xl font-medium text-slate-100 hover:text-slate-800 duration-500">
          Shop-Store
        </span>
      </div>

      <div>
        <ul className="flex gap-4 items-center">
          <li className="relative group text-lg hover:text-xl font-medium text-slate-100 hover:text-slate-800 duration-500">
            <NavLink to="/">Catalogo</NavLink>
            <ul className="absolute hidden group-hover:block -left-20 bg-amber-200 w-max px-8 py-2 rounded shadow-lg">
              {isCategory.map((categoriaNav, index) => (
                <li key={index} className="my-4">
                  <NavLink
                    to={`/category/${categoriaNav}`}
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-800 font-bold"
                        : "text-gray-800 hover:text-amber-800"
                    }
                  >
                    {categoriaNav}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
          <li className="text-lg hover:text-xl font-medium text-slate-100 hover:text-slate-800 duration-500 flex">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NarBar;
