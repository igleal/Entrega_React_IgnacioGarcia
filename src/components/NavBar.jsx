import CartWidget from "./CartWidget.jsx";

function NarBar() {
  return (
    <nav className="bg-amber-800 p-4 flex justify-between items-center">
      <div>
        <span className="text-lg hover:text-xl font-medium text-slate-100 hover:text-slate-800 duration-500">Shop-Store</span>
      </div>

      <div>
        <ul className="flex gap-4 items-center">
          <li className="text-lg hover:text-xl font-medium text-slate-100 hover:text-slate-800 duration-500">
            Remeras
          </li>
          <li className="text-lg hover:text-xl font-medium text-slate-100 hover:text-slate-800 duration-500">
            Pantalones
          </li>
          <li className="text-lg hover:text-xl font-medium text-slate-100 hover:text-slate-800 duration-500">
            Calzado
          </li>
          <li className="text-lg hover:text-xl font-medium text-slate-100 hover:text-slate-800 duration-500">
            Mochilas
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
