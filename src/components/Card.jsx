import CategoriasJson from "../assets/categorias.json";

const Card = () => {
  return (
    <div className="grid grid-cols-2 gap-1 p-1 md:w-[70%] md:mx-auto lg:grid-cols-4 lg:w-[90%] lg:h-[20vh] lg:gap-4">
      {CategoriasJson.categorias.map((categoria) => (
        <div key={categoria.id} className="overflow-hidden shadow-lg rounded-lg md:">
          <div className="relative">
            {/* Background Image */}
            <div className="w-full h-[10vh] bg-cover bg-home  lg:h-[20vh]"></div>
            {/* Overlay with Text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-xl font-bold">{categoria.name}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
