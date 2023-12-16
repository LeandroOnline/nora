"use client";

import { useEffect } from "react";
import About from "./Components/About";
import Decode from "./Components/Decode";
import Header from "./Components/Header";
import Therapy from "./Components/Therapy";
import style from "./page.module.css";
// import { motion } from "framer-motion"
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <main className={style.main}>
      <Header />
      <About />
      <Decode />
      <Therapy />
    </main>
  );
}
