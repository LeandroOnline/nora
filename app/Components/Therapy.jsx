"use client";
import { useState } from "react";
import style from "./Therapy.module.css";
import Image from "next/image";
import textFromTherapy from "@/utils/textsFromTherapy";
import Link from "next/link";

const Therapy = () => {
  const [state, setState] = useState("Terapia Floral");

  return (
    <div className="allscreen allContainer" id="therapy" data-aos="fade-up">
      <h1 className="title">Terapias Holisticas</h1>
      <div className={`bigcard ${style.container}`}>
        <div className={style.category}>
          <button
            className={
              state === "Terapia Floral"
                ? style.buttonActive
                : style.buttonInactive
            }
            onClick={() => setState("Terapia Floral")}
          >
            Terapias Floral
          </button>
          <button
            className={
              state === "Numerologia"
                ? style.buttonActive
                : style.buttonInactive
            }
            onClick={() => setState("Numerologia")}
          >
            Numerologia
          </button>
          <button
            className={
              state === "Tarot Evolutivo"
                ? style.buttonActive
                : style.buttonInactive
            }
            onClick={() => setState("Tarot Evolutivo")}
          >
            Tarot Evolutivo
          </button>
          <button
            className={
              state === "Pendulo Hebreo"
                ? style.buttonActive
                : style.buttonInactive
            }
            onClick={() => setState("Pendulo Hebreo")}
          >
            Pendulo Hebreo
          </button>
          <button
            className={
              state === "Reiki" ? style.buttonActive : style.buttonInactive
            }
            onClick={() => setState("Reiki")}
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
            width={500}
            height={500}
            alt={state}
            loading="lazy"
            className={style.imgCategory}
          />
          <div className={style.card}>
            <div className={style.cardText}>{textFromTherapy[state]}</div>
            <Link
              href={`/solicitud/${state}`}
              className={`primaryBtn ${style.fullWidth}`}
            >
              Solicitar Turno
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Therapy;
