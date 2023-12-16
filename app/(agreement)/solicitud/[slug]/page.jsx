"use client";
import { useState } from "react";
import style from "../../page.module.css";
import { sendWsp } from "@/helpers/sendWsp";

const Page = ({ params }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [option, setOption] = useState("");

  return (
    <div className={style.data2}>
      <div className={style.inputContainer2}>
        <h4>Nombre completo</h4>
        <input
          placeholder="..."
          className={style.inputName}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={style.inputContainer2}>
        <h4>Fecha de nacimiento</h4>
        <input
          placeholder="**/**/****"
          className={style.inputName}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className={style.inputContainer2}>
        <h4>Modalidad</h4>
        <select
          className={style.select}
          name="option"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          <option value="">▾ Seleccionar</option>
          <option value="Online">▾ Online</option>
          <option value="Presencial">▾ Presencial</option>
        </select>
      </div>
      <button
        className={style.primaryBtn}
        onClick={() => {
          sendWsp(name, date, option, "", false, params.slug);
          setDate("");
          setName("");
          setOption("");
        }}
      >
        Enviar solicitud
      </button>
    </div>
  );
};
export default Page;
