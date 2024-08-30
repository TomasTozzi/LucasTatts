import NavBar from "../components/NavBar.jsx";

function Main() {
  return (
    <div className="bg-home bg-center bg-cover">
      {/* NavBar con fondo oscuro y filtro */}
      <header id="home" className="bg-black bg-opacity-0 fixed w-full top-0 z-20">
        <NavBar />
      </header>
      <main className="relative w-full h-screen h-[90vh] flex items-center">
        {/* Contenedor con fondo oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-start justify-center p-8 lg:p-12">
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
    </div>
  );
}

export default Main;
