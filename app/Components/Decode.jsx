import Image from "next/image";
import style from "./Decode.module.css";
import "../globals.css";

const Decode = () => {
  return (
    <div className="allscreen allContainer">
      <h1 className="title">Decodificación Bioemocional</h1>
      <div className="bigcard">
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
              repitiendo en nuestra historia causando dolor y sufrimiento. Es
              por ello que vamos a buscar en nuestro tiempo presente iguales
              vivencias, como así también en los primeros años de vida, en el
              útero de mamá, para ir luego hacia atrás, hacia los ancestros,
              para desprogramarlas completamente y poder sanar.
            </p>
            <br />
            <h3>
              ¿QUÉ PUEDO LOGRAR A TRAVÉS DE LA DECODIFICACIÓN BIOEMOCIONAL Y LA
              BIOEXISTENCIA CONSCIENTE?
            </h3>
            <p>
              Sanar un síntoma, cambiar tu realidad, al desbloquear esas
              emociones todo fluye, tomar consciencia, comprender y mejorar la
              calidad de vida, para vos, tus ancestros y descendencia. Ese
              camino profundo y real es la Bioexistencia Consciente
            </p>
          </div>
          <div className="buttons">
            <a
              // className="buttonSecondary"
              className="instagram"
              target="_blank"
              href="https://www.instagram.com/nora.bioconsultora/?hl=es"
            >
              <Image
                src="/images/instagram.png"
                alt="puente"
                width={30}
                height={30}
              />
              <p> @nora.bioconsultora </p>
            </a>
            <button className="button">Solicitar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Decode;
