"use client";
import { useState } from "react";
import style from "./Therapy.module.css";

const Therapy = () => {
  const [state, setState] = useState("therapy");

  return (
    <div className="allscreen allContainer">
      <h1 className="title">Decodificación Bioemocional</h1>
      <div className="bigcard">
        <div className={style.category}>
          <button
            className={
              state === "therapy" ? style.buttonActive : style.buttonInactive
            }
            onClick={() => setState("therapy")}
          >
            Terapias Holisticas
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
        </div>
      </div>
    </div>
  );
};
export default Therapy;
