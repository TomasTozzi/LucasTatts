import Card from "./Card";

function Categorias() {
  return (
    <div id="categorias" className="my-[5vh]">
      {/* Encabezado h2 para "Categorias" */}
      <h2 className="text-center text-4xl font-medium my-[5vh]">Categorías</h2>
      <section>
        <Card />
      </section>
    </div>
  );
}

export default Categorias;
