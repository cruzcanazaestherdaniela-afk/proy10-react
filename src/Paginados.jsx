import Acordeon from './Acordeon';
import Carruseldos from './Carruseldos';
import './Paginauno.css';

function Paginados() {
  return (
    <div>
      <h1 className="titulo">
        HISTORIA
      </h1>
      <div className="inicio">

        <div className="izquierda">
          <div
            className="accordion accordion-flush"
            id="accordionFlushExample"
          >
            <Acordeon
              id="item1"
              titulo="EL COMIENZO"
              contenido="El Día del Trabajador surge como homenaje a las luchas obreras del siglo XIX, donde los trabajadores exigían mejores condiciones laborales y jornadas más justas. Estas luchas fueron fundamentales para la conquista de derechos laborales que hoy en día disfrutamos."
            />

            <Acordeon
              id="item2"
              titulo="LUCHA POR LOS TRABAJADORES"
              contenido="Las protestas obreras se expandieron por distintos países, generando movimientos sociales importantes.Estas luchas contribuyeron a la creación de sindicatos y a la implementación de leyes laborales que protegen a los trabajadores en todo el mundo."
            />

            <Acordeon
              id="item3"
              titulo="ACTUALIDAD DEL TRABAJO"
              contenido="Actualmente, el trabajo sigue siendo fundamental para el desarrollo de la sociedad y la economía.Sobretodo el trabajo imformal, que es una realidad en muchos países y representa un desafío para la protección de los derechos laborales."
            />
          </div>
        </div>
        <div className="derecha">
          <Carruseldos />
        </div>

      </div>

    </div>
  );
}

export default Paginados;