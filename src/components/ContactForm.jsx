import Mapa from "../components/Mapa";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex flex-col-reverse  lg:align-center lg:justify-center lg:flex-row items-stretch  gap-6 p-4 lg:p-8">
      {/* Contenedor del mapa */}
      <div className="w-full max-w-lg sm:max-w-[100%] lg:m-0 md:max-w-[90%] md:m-auto lg:max-w-[40%] bg-white p-6 rounded-xl shadow-xl border border-gray-200 flex flex-col justify-between">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center text-gray-900 ">
          Podes encontrarnos en
        </h2>
        <Mapa />
      </div>

      {/* Contenedor del formulario */}
    
      <div
        id="contacto"
        className="w-full max-w-lg  sm:max-w-[100%] md:max-w-[90%] md:m-auto lg:max-w-[40%] lg:m-0 bg-white p-6 lg:p-8 rounded-xl shadow-xl border border-gray-200 flex flex-col justify-evenly"
      >
        <h2 className="text-2xl lg:text-3xl font-semibold text-center text-gray-900">
          Contáctanos
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4">
            <div className="relative flex-grow">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-800 mb-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-lg shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 px-4 py-3 transition duration-300 ease-in-out"
                required
              />
            </div>
            <div className="relative flex-grow">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-800 mb-1"
              >
                Número
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-lg shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 px-4 py-3 transition duration-300 ease-in-out"
                required
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-800 mb-1"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="block w-full border border-gray-300 rounded-lg shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 px-4 py-3 transition duration-300 ease-in-out"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Enviar
          </button>
        </form>
        </div>
      </div>

  );
};

export default ContactForm;
