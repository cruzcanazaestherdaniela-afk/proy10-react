import { Routes, Route, Link } from 'react-router-dom';
import Paginauno from './Paginauno';
import Paginados from './Paginados';
import Paginatres from './Paginatres';
import Paginacuatro from './Paginacuatro';
import './Estructura.css';

function Pagina() {
  return (
    <div className="principal">

      <div className="cabecera">
        <Link to="/">Bienvenidos</Link> |
        <Link to="/Paginados">Historia</Link> |
        <Link to="/Paginatres">Personajes</Link> |
        <Link to="/Paginacuatro">Feriado</Link>
      </div>

      <div className="caja1">
      </div>

      <div className="caja2">
        <Routes>
          <Route path="/" element={<Paginauno />} />
          <Route path="/Paginados" element={<Paginados />} />
          <Route path="/Paginatres" element={<Paginatres />} />
          <Route path="/Paginacuatro" element={<Paginacuatro />} />
        </Routes>
      </div>

      <div className="pie">
        <h3>Cruz Canaza Esther Daniela, 2026</h3>
      </div>

    </div>
  );
}

export default Pagina;