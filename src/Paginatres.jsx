import CardInfo from './CardInfo';
import Carruseltres from './Carruseltres';
import Acordeon from './Acordeon';
import './Paginauno.css';

function Paginatres() {
  return (
    <div>

      <h1 className="titulo">
        PERSONAJES HISTORICOS
      </h1>

      <div className="inicio">

        <div className="izquierda">
          <CardInfo
            imagen="/casera.jpg"
            titulo="El trabajo une culturas, regiones y sueños en nuestra hermosa Bolivia."
            descripcion="~ Homenaje al trabajador boliviano"
          />
        </div>

        <div className="derecha">
          <Carruseltres />
          <br />
          <div
            className="accordion accordion-flush"
            id="accordionFlushExample"
          >
            <Acordeon
              id="primero"
              titulo="DOMITILA BARRIOS DE CHUNGAGRA"
              contenido="Domitila Barrios de Chungara (Catavi, Bolivia 7 de mayo de 1937[3] - Cochabamba, Bolivia; 12 de marzo de 2012) fue una destacada líder boliviana. De familia humilde, dio numerosos testimonios acerca del sufrimiento que tenían los mineros de su país. Es conocida por su lucha pacífica contra las dictaduras de René Barrientos Ortuño y de Hugo Banzer Suárez"
            />

            <Acordeon
              id="segundo"
              titulo="FEDERICO ESCOBAR ZAPATA"
              contenido="Federico Escobar Zapata (Oruro, 26 de noviembre de 1923-8 de noviembre de 1966) fue un líder sindical minero de Bolivia. Fue trabajador minero del Campamento Siglo XX de la Mina Catavi, donde ocupó el cargo de Control Obrero. Al ser Dirigente minero que representó la resistencia obrera y luchó por los derechos sindicales"
            />

            <Acordeon
              id="tercero"
              titulo="EUGENE V. DEBS"
              contenido="Fue un activista y sindicalista estadounidense. Fue uno de los miembros fundadores de Industrial Workers of the World y cinco veces candidato a la presidencia de los Estados Unidos por el Partido Socialista de América. Mediante sus candidaturas presidenciales y su trabajo al frente de movimientos obreros, Debs fue un Líder sindical estadounidense que promovió la justicia social y la organización de los trabajadores."
            />
          </div>
        </div>

      </div>

    </div>
  );
}

export default Paginatres;