import CardInfo from './CardInfo';
import Carrusel from './Carrusel';
import './Paginauno.css';

function Paginauno() {
  return (
    <div>

      <h1 className="titulo">
        ¡BIENVENIDOS!
      </h1>

      <div className="inicio">

        <div className="izquierda">
          <CardInfo
            imagen="/Trabajo.webp"
            titulo="FELICIDADES A TODOS NUESTROS TRABAJADORES!"
            descripcion=""
          />
        </div>

        <div className="derecha">
          <h2>FELIZ DIA!</h2>
          <p>El 1 de mayo es una fecha importante en Bolivia y en el mundo, donde se reconoce la lucha de los trabajadores por mejores condiciones laborales, derechos justos y una vida digna. Este día representa esfuerzo, sacrificio y el valor del trabajo en la sociedad.</p>
          <Carrusel />
        </div>

      </div>

    </div>
  );
}

export default Paginauno;