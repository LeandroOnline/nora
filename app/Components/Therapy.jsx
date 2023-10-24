"use client";
import { useState } from "react";
import style from "./Therapy.module.css";
import Image from "next/image";
import textFromTherapy from "@/utils/textsFromTherapy";
import Link from "next/link";

const Therapy = () => {
  const [state, setState] = useState("therapy");

  return (
    <div className="allscreen allContainer" id="therapy">
      <h1 className="title">Terapias Holisticas</h1>
      <div className="bigcard">
        <div className={style.category}>
          <button
            className={
              state === "therapy" ? style.buttonActive : style.buttonInactive
            }
            onClick={() => setState("therapy")}
          >
            Terapias Floral
          </button>
          <button
            className={
              state === "number" ? style.buttonActive : style.buttonInactive
            }
            onClick={() => setState("number")}
          >
            Numerologia
          </button>
          <button
            className={
              state === "tarot" ? style.buttonActive : style.buttonInactive
            }
            onClick={() => setState("tarot")}
          >
            Tarot Evolutivo
          </button>
          <button
            className={
              state === "pendulum" ? style.buttonActive : style.buttonInactive
            }
            onClick={() => setState("pendulum")}
          >
            Pendulo Hebreo
          </button>
          <button
            className={
              state === "reiki" ? style.buttonActive : style.buttonInactive
            }
            onClick={() => setState("reiki")}
          >
            Reiki Master
          </button>
          <a
            className="instagram"
            target="_blank"
            href="https://www.instagram.com/shanti.merlo/"
          >
            <Image
              src="/images/instagram.png"
              alt="puente"
              width={30}
              height={30}
            />
            <p> @shanti.merlo </p>
          </a>
        </div>
        <div className={style.details}>
          <Image
            src={`/images/${state}.jpg`}
            width={1000}
            height={1000}
            alt="category"
            className={style.imgCategory}
          />
          <div className={style.card}>
            <div className={style.cardText}>{textFromTherapy[state]}</div>
            <Link href="/solicitud" className={`primaryBtn ${style.fullWidth}`}>
              Solicitar Turno
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Therapy;
