import { useState } from "react";

function Checkout({ viewOn, viewOff, clear }) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  if (!viewOn) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submit = () => {
    const { nombre, email, telefono, direccion } = formData;
    if (!nombre || !email || !telefono || !direccion) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    clear();
    viewOff();
    alert("¡Compra realizada con éxito!");
  };

  return (
    <div className="fixed inset-0 bg-amber-50/50 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md relative">
        <h2 className="text-xl font-bold mb-4 text-center">
          Formulario de compra
        </h2>

        <div className="space-y-3">
          <input
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="direccion"
            placeholder="Dirección"
            value={formData.direccion}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex justify-end mt-6 gap-2">
          <button
            onClick={viewOff}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancelar
          </button>
          <button
            onClick={submit}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={submit}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
