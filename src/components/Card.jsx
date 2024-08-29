
const Card = () => {
  return (
    <div className=" overflow-hidden shadow-lg">
      <div className="relative">
        {/* Background Image */}
        <div
          className="w-full h-[30vh] bg-cover bg-home" 
          
        ></div>
        {/* Overlay with Text */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold">Categoria</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
