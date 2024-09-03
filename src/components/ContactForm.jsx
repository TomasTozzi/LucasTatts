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
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row md:pb-4 items-center">


      <div className="w-full  mx-auto p-8 bg-white rounded-lg shadow-lg md:w-[75%] lg:w-[40%] h-screen h-[49.9vh]">


        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">
          Podes encontrarnos en
        </h2>
        <Mapa />
      </div>


      <div
        id="contacto"
        className="w-full mx-auto p-8 bg-white rounded-lg shadow-lg md:w-[75%]    lg:w-[40%] my-[5vh] border border-gray-200"
      >


        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">
          Contáctanos
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-wrap space-y-6 md:space-y-0 md:space-x-4">
            <div className="relative flex-grow md:flex-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-800"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 px-4 py-3"
                required
              />
            </div>
            <div className="relative flex-grow md:flex-1">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-800"
              >
                Número
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 px-4 py-3"
                required
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-800"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 px-4 py-3"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
