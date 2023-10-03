import About from "./Components/About";
import Header from "./Components/Header";
import style from "./page.module.css";

export default function Home() {
  return (
    <main className={style.main}>
      <Header />
      {/* <About /> */}
      {/* me conviene usar el back aca para aplicar parallax mas facil */}
    </main>
  );
}
