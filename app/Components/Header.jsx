import Image from "next/image";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className="allscreen">
      <div className={`bigcard ${style.container}`}>
        <Image
          src="/images/Nora.png"
          alt="nora"
          width={500}
          height={500}
          className={style.noraImg}
        />
        <div className={style.textContainer}>
          <h1 className={style.title}>Cruzar el puente hacia tu Ser</h1>
          <h2 className={style.subTitle}>
            Te acompaño en tu camino de descubrimiento, sanación y consciencia.
          </h2>
          <div className={style.buttons}>
            <button className={style.buttonSecondary}>Terapias Holisticas</button>
            <button className={style.button}>Decodificacion</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
