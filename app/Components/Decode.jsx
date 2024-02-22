import Image from "next/image";
import style from "./Decode.module.css";
import Link from "next/link";

const Decode = () => {
  return (
    <div className="allscreen allContainer" id="decode" data-aos="fade-up">
      <h1 className="title">Decodificación Bioemocional</h1>
      <div className={`bigcard ${style.allDecode}`}>
        <Image
          src="/images/puente.jpg"
          alt="puente"
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
          className={style.bridge}
        />
        <div className={style.detailContainer}>
          <div className={style.allText}>
            <h2>La Decodificación Bioemocional</h2>
            <p>
              La Decodificación Bioemocional es un método con base ciéntifica
              (Dr. Hamer y sus leyes biológicas) donde el síntoma es el que nos
              guía hacia las emociones que quedaron bloqueadas, que se vienen
              repitiendo en la historia, en forma anti – biológica, por ello
              causa dolor y sufrimiento. Las buscaremos en el tiempo presente,
              en la línea de tiempo contemporánea, iguales vivencias, como así
              también antes de la gestación, en el útero de mamá, en el proyecto
              sentido que originó la vida y poder ir luego hacia atrás, hacia
              los ancestros, lo transgeneracional, lo que llamamos Reorixins, la
              re interpretación del origen a través del síntoma, para comprende
              el para qué sucede, para qué aparece esta dolencia y finalmente
              desprogramarla, desactivar esos códigos y sanar profundamente la
              realidad.
            </p>
            <br />
            <h3>
              ¿QUÉ PUEDO LOGRAR A TRAVÉS DE LA DECODIFICACIÓN BIOEMOCIONAL Y LA
              BIOEXISTENCIA CONSCIENTE?
            </h3>
            <p>
              Sanar un síntoma, ese tema doloroso que está presente en la vida
              es lo primero que vamos a liberar . Una mirada distinta a las
              otras corrientes Bio, ya que la BIOEXISTENCIA CONSCIENTE, lo
              considera como una aprendizaje, un cambio profundo para mejorar y
              comprender el para qué está en mi vida y al desbloquear esas
              emociones que quedaron atrapadas en el tiempo todo fluye, al tomar
              consciencia, y mejorar la calidad de vida en todos sus aspectos.
              Cada sesión es un puente a cruzar, es la llave al Ser Real,
              conocimiento profundo, pura expansión de consciencia y libertad
              creadora.
            </p>
          </div>
          <div className="buttons">
            <a
              className="instagram"
              target="_blank"
              href="https://www.instagram.com/nora.bioconsultora/?hl=es"
            >
              <Image
                src="/images/instagram.png"
                alt="puente"
                width={30}
                height={30}
                className="icon"
              />
              <p> @nora.bioconsultora </p>
            </a>
            <Link href="/acuerdo-bio" className="primaryBtn">
              Solicitar Turno
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Decode;
