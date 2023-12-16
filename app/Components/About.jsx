import style from "./About.module.css";
const About = () => {
  return (
    <div className="allscreen allContainer" id="about" data-aos="fade-up">
      <h1 className="title">UN POCO DE MI HISTORIA</h1>
      <div className={`bigcard ${style.container}`}>
        <div className={style.allText}>
          <h2>👋 Hola soy Nora Benito</h2>
          <p className={style.text}>
            Terapeuta Holística hace más de 35 años y Decodificadora
            Bioemocional, consultora en Bioexistencia Consciente – Reorixins- de
            Humano Puente. Inicié mi camino en la adolescencia, buscando
            respuestas en momentos difíciles para hacerlo; La metafísica y el
            pensamiento positivo, el método Silva, fueron mis inicios y de ahí
            no dejé de sumar conocimientos, como Reiki Master (Usui, Karuna,
            Pleyadianos); Radiestesia; Péndulo Hebreo; Limpieza energética;
            Tarot Evolutivo; Numerología, Eneagrama, Constelaciones Individuales
            y la Terapia Floral de distintos sistemas que todas estas terapias
            forman parte de las sesiones holísticas. Por otra parte aprendí, en
            la Fundación Salud cómo gestionar en el propio cuerpo la sanación, y
            luego, con las corrientes Bio que he transitado, me introdujeron en
            este fantástico camino de sanar un síntoma, al descubrir el momento
            y la emoción no resuelta, que quedó trabada en el tiempo y lo
            generó. Finalmente, la mirada de Humano Puente, corriente creada por
            Pablo Almazán y Lucrecia Bianchi, la Bioexistencia Consciente,
            terminó de integrar TODO lo aprendido, de una forma más profunda y
            completa, con una mirada elevada del Ser. Reconocernos los creadores
            de nuestra realidad, donde es el síntoma, ese dolor que hace que la
            vida no sea vivida plenamente, esa limitación física, emocional,
            mental o de la propia existencia, el que no sólo vamos a
            desprogramar,sinó también nos va a mostrar y ayudar a comprender que
            es lo que debo tomar consciencia para sanar. Cruzar ese puente de
            miedos, limitaciones, frustraciones, dolores hacia el verdadero Ser,
            es lo que juntos consultante y consultora vamos a transitar en este
            camino de evolución. Vos elegís la Terapia que más te resuene…las
            que te ofrezco en forma Holística o la sanación profunda propuesta
            desde la Biodecodificación. Te espero para sanar junt@s!!! NORA
          </p>
        </div>
        <iframe
          className={style.video}
          src="https://www.youtube.com/embed/bQ9n0qGk6Hw?si=NypnBL-M1jLF6y9l"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default About;
