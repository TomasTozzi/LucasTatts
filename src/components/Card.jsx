import CategoriasJson from "../assets/categorias.json";

const Card = () => {
  return (
    <div className="flex flex-row flex-wrap items-center gap-6 p-6">
      {CategoriasJson.categorias.map((categoria) => (
        <div
          key={categoria.id}
          className="bg-white shadow-lg rounded-lg  flex flex-col items-center border border-gray-200 w-[90%] sm:w-[40%] md:w-[45%] m-auto lg:w-[46vw] xl:w-[40%] lg:flex-row-reverse flex-shrink-0 h-[30vh]" // Altura relativa
        >
          {/* Imagen arriba */}
          <div className="h-[60%] lg:h-full  w-full  lg:w-[50%] "> {/* Ajusta el tamaño del contenedor de la imagen */}
            <img
              src={categoria.imagenes}
              alt={categoria.name}
              className="h-full w-full object-cover" // Imagen ocupa todo el alto del contenedor
            />
          </div>

          {/* Contenido debajo */}
          <div className="p-4 flex flex-col w-full lg:w-[50%] h-full"> {/* El contenido ocupa el 50% en pantallas grandes */}
            {/* Título */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-left mb-2">
              {categoria.name}
            </h2>
            {/* Descripción visible sólo en md y superior */}
            <p className="hidden lg:block text-base text-gray-600 text-left mb-4 n  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
