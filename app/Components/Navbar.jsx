"use client";
import Link from "next/link";
import style from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={style.navContainer}>
      <h1 className={style.title}>NORA</h1>

      <Image
        className={style.menuButton}
        src="/images/menu.png"
        alt="wsp"
        width={27}
        height={27}
      />

      <Image
        className={style.menuButton}
        src="/images/x.png"
        alt="wsp"
        width={27}
        height={27}
      />

      <section className={style.menu}>
        <Link href="/" className={style.link}>
          Inicio
        </Link>
        <Link href="/#about" className={style.link}>
          Acerca de Mi
        </Link>
        <Link href="/#decode" className={style.link}>
          Decodificacion
        </Link>
        <Link href="/#therapy" className={style.link}>
          Terapias Holisticas
        </Link>
      </section>
      <button className={style.wspButton}>
        <Image src="/images/whatsapp.png" alt="wsp" width={27} height={27} />
        WhatsApp
      </button>
    </nav>
  );
};
export default Navbar;
