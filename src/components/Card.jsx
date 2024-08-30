import CategoriasJson from "../assets/categorias.json";

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {CategoriasJson.categorias.map((categoria) => (
        <div
          key={categoria.id}
          className="bg-white shadow-lg rounded-lg flex flex-col items-center border border-gray-200 w-full h-screen h-[25vh] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%]   md:h-[70vh]  xl:auto flex-shrink-0"
        >
          {/* Imagen arriba */}
          <div className="relative w-full h-1/2 md:h-3/5">
            <img
              src={categoria.imagenes} // Assuming categoria has an image property
              alt={categoria.name}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          {/* Contenido debajo */}
          <div className="p-4 md:p-6 flex flex-col justify-between w-full h-1/2 md:h-2/5">
            {/* Título */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800  text-left">
              {categoria.name}
            </h2>
            {/* Descripción visible sólo en md y superior */}
            <p className="hidden md:block text-base text-gray-600 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            {/* Enlace con flecha */}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 flex items-center font-medium mt-auto text-center"
            >
              Ver imágenes
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

