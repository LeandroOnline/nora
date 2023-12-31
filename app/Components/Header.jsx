import Image from "next/image";
import style from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className="allscreen" data-aos="fade-up">
      <div className={`bigcard ${style.container}`}>
        <Image
          src="/images/chakana-hotel-boutique-logo-clear-Tamano-Original.png"
          alt="nora"
          width={1000}
          height={1000}
          style={{ objectFit: "cover" }}
          className={style.backImg}
        />
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
          <div className="buttons">
            <Link href='#therapy' className="buttonSecondary">Terapias Holisticas</Link>
            <Link href='#decode' className="primaryBtn">Decodificacion</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
