import { useState } from 'react';

function Contador() {

  const [contador, setContador] = useState(0);

  const aumentar = () => {
    if (contador < 5) {
      setContador(contador + 1);
    }
  };

  return (
        <div className="contador">

            <h3>Apoyo a los Derechos Laborales</h3>

            <p>
            Presiona el botón 5 veces para demostrar tu apoyo a la libertad,
            el bienestar y la comodidad de los trabajadores.
            </p>

            <h2>{contador} / 5</h2>

            <button onClick={aumentar}>
            Apoyar
            </button>

            {contador === 5 && (
            <p>
                🎉 ¡Gracias por apoyar los derechos laborales!
            </p>
            )}

        </div>
    );
}

export default Contador;