import About from "./Components/About";
import Decode from "./Components/Decode";
import Header from "./Components/Header";
import style from "./page.module.css";

export default function Home() {
  return (
    <main className={style.main}>
      <Header />
      <About />
      <Decode />
      {/* me conviene usar el back aca para aplicar parallax mas facil */}
    </main>
  );
}
