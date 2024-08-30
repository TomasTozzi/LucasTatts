function Main() {
  return (
    <main className="relative w-full h-screen bg-home bg-cover bg-center flex items-center h-[70vh]">
      {/* Contenedor con fondo oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-start justify-center p-8 lg:p-12">
        <div className="relative w-full max-w-screen-xl mx-auto">
          {/* Título principal */}
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Tu Próximo Tatuaje Comienza Aquí: Los Mejores Diseños
          </h1>
          {/* Frase adicional */}
          <p className="text-white text-lg mb-6">
            Explora una colección única de diseños exclusivos y encuentra el tatuaje perfecto para ti.
          </p>
          {/* Enlace "Contáctame" */}
          <a
            href="#contacto"
            className="text-white bg-black hover:bg-zinc-950 py-3 px-6 rounded-md text-lg font-medium transition duration-300"
          >
            Contáctame
          </a>
        </div>
      </div>
    </main>
  );
}



export default Main;
