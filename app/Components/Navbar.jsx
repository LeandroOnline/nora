import Link from "next/link";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navContainer}>
      <h1 className={style.title}>NORA</h1>
      <section className={style.menu}>
        <Link href="/inicio" className={style.link}>Inicio</Link>
        <Link href="/inicio" className={style.link}>Acerca de Mi</Link>
        <Link href="/inicio" className={style.link}>Decodificacion</Link>
        <Link href="/inicio" className={style.link}>Terapias Holisticas</Link>
      </section>
    </nav>
  );
};
export default Navbar;
