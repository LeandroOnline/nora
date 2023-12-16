"use client";
import { useState } from "react";
import style from "../page.module.css";
import { sendWsp } from "@/helpers/sendWsp";

const Agreement = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [option, setOption] = useState("");
  const [sintoma, setSintoma] = useState("");

  return (
    <div className={style.form}>
      <div className={style.data}>
        <div className={style.inputContainer}>
          <h4>Nombre completo</h4>
          <input
            placeholder="..."
            className={style.inputName}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={style.inputContainer}>
          <h4>Fecha de nacimiento</h4>
          <input
            placeholder="**/**/****"
            className={style.inputName}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className={style.inputContainer}>
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
      </div>
      <div className={style.inputContainer}>
        <h4>Sintomas</h4>
        <textarea
          className={style.textarea}
          name="text"
          value={sintoma}
          onChange={(e) => setSintoma(e.target.value)}
        ></textarea>
      </div>
      <div className={style.consent}>
        <h4>MANIFIESTO DE CONFORMIDAD</h4>
        <p>
          En búsqueda de mi bienestar físico, mental y emocional manifiesto mi
          voluntad de iniciar las consultas en Bioexistencia Consciente con la
          Consultora NORA BENITO, siendo totalmente responsable de mi decisión,
          sabiendo que dichas consultas no reemplazan ni pretenden ser una
          práctica médica ni psiquiátrica. Manifiesto no tener patologías
          cardíacas, ni psiquiátricas como bipolaridad, depresión ni
          esquizofrenia, ni haber tenido ACV y/o estar cursando embarazo. Si
          reconozco algunos de estas condiciones sé que un “tercero podrá
          concurrir por mí a la sesión que se llama “Atención a través de un
          tercero” ya que todos somos uno y al sanar él, sano yo, me comprometo
          a avisar a la Consultora.
        </p>
        <p>
          - Información: La sesión se llevará a cabo en forma virtual o
          presencia, en día y horario a convenir por a las dos partes. Al
          acordar la fecha de la consulta, se abonará el 50 % de la misma. En
          caso de no poder asistir se debe avisar 48 hs. antes y la
          reprogramaremos; de no hacerlo se perderá la seña.
        </p>
      </div>
      <div className={style.allWidth}>
        <button
          className={`primaryBtn ${style.buttonWith}`}
          onClick={() => {
            sendWsp(name, date, option, sintoma, true);
            setDate("");
            setName("");
            setOption("");
            setSintoma("");
          }}
        >
          Aceptar y enviar solicitud
        </button>
      </div>
    </div>
  );
};
export default Agreement;
