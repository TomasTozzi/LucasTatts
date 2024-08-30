import CategoriasJson from "../assets/categorias.json";

const Card = () => {
  return (
    <div
      className="grid grid-cols-2 gap-2 p-2
        sm:grid-cols-1 sm:gap-2 
        md:w-[60%] md:mx-auto md:h-[30vh]
        md:grid-cols-4 md:w-[80vw]  lg:w-[90%] lg:h-[25vh] lg:gap-4 border-black border-2"
    >
      {CategoriasJson.categorias.map((categoria) => (
        <div
          key={categoria.id}
          className="overflow-hidden shadow-lg rounded-lg 
            flex flex-col justify-center items-center
            transition-transform transform hover:scale-105 hover:shadow-2xl
            hover:border-dark-500 border-2 border-transparent"
        >
          <div className="relative w-full h-full">
            {/* Background Image */}
            <div className="w-full h-[40vh] bg-cover bg-home sm:h-[40vh]"></div>
            {/* Overlay with Text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-lg font-bold">{categoria.name}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
