import About from "./Components/About";
import Decode from "./Components/Decode";
import Header from "./Components/Header";
import Therapy from "./Components/Therapy";
import style from "./page.module.css";
// import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className={style.main}>
      <Header />
      <About />
      <Decode />
      <Therapy />
    </main>
  );
}
