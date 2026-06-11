import CardInfo from './CardInfo';
import Contador from './Contador';
import './Paginacuatro.css';

function Paginacuatro() {
  return (
    <div>

      <h1 className="titulo1">
        FERIADO EN BOLIVIA
      </h1>

      <Contador />

      <div className="inicio1">

        <div className="izquierda1">
          <CardInfo
            imagen="/musica.jpg"
            titulo="BENEFICIOS DEL 1 DE MAYO"
            descripcion="El descanso permite que el trabajador se recupere y reduzca el estrés laboral, al mismo tiempo que fomenta el tiempo en familia. Además, estos momentos de desconexión son clave porque promueven la reflexión sobre los derechos y el equilibrio personal."
          />
        </div>

        <div className="derecha1">
          <CardInfo
            imagen="/artistas.jpg"
            titulo="PROHIBICIONES DEL 1 DE MAYO"
            descripcion="Vulnerar la ley al obligar a trabajar sin pago o negar el descanso afecta gravemente la salud del personal. Además, no respetar contratos y desconocer derechos destruye la confianza y la legalidad laboral."
          />
        </div>

      </div>

    </div>
  );
}

export default Paginacuatro;