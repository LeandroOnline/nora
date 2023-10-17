import style from "./About.module.css";
const About = () => {
  return (
    <div className="allscreen allContainer" id="about">
      <h1 className="title">Acerca de Mi</h1>
      <div className={`bigcard ${style.container}`}>
        <div className={style.allText}>
          <h2>👋 Hola soy Nora Benito</h2>
          <p className={style.text}>
            Terapeuta Holística, y Decodificadora Bioemocional, consultora en
            Bioexistencia Consciente – Reorixins perteneciente a Humano Puente.
            Inicié mi camino en la adolescencia, buscando respuestas en momentos
            difíciles para hacerlo, la metafísica, el pensamiento positivo, y de
            ahí no dejé de sumar conocimientos, como reiki (Usui, Karuna,
            Pleyadianos); Radiestesia; Péndulo Hebreo; Limpieza energética;
            Tarot Evolutivo; Numerología, Eneagrama, Constelaciones Individuales
            y también la Terapia Floral. Como gestionar en el propio cuerpo la
            sanación aprendido con Stella Maris Maruso, y las corrientes Bio que
            he transitado, me introdujeron en este fantástico camino de sanar un
            síntoma. Finalmente, la mirada de Humano Puente terminó de integrar
            todo. Somos los creadores de nuestra realidad y en cada consulta
            sanamos juntos consultor y consultante, ya que al ser espejos que
            valientemente nos reunimos en consulta para liberar, tomar
            consciencia de viejas creencias limitantes, mandatos que venimos
            repitiendo en el Clan ya que el resultado fue de VIDA y aunque al
            ser anti-biológico y nos cause dolor, nos genera este síntoma a
            tratar, lo repetimos porque el inconsciente así nos pide para seguir
            VIVOS. Es momento de cambiar ese mandato, esas emociones no
            resueltas, poder liberarlas es la tarea que llevaremos a cabo en
            consulta, presencial o virtual. Te espero para sanar juntos !!!
          </p>
        </div>
        <iframe
          className={style.video}
          src="https://www.youtube.com/embed/bQ9n0qGk6Hw?si=NypnBL-M1jLF6y9l"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
export default About;
