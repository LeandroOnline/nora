"use client";
import { useState } from "react";
import style from "../page.module.css";

const confirm =
  "A través del presente consentimiento manifiesto mi voluntad, en búsqueda de bienestar emocional, mental y físico, como creador de mi realidad inicio consultas en Bioexistencia Consciente con al Consultora Nora Benito. Dicho encuentro será acorado por ambas partes presencial o virtual. Soy totalmente responsable de mi decisión. Estas consultas no reemplazan ni pretenden ser una práctica médica ni psiquiátrica. Se llevará a cabo de forma presencial o virtual en días y horarios a convenir previamente y con el pago previo a la consulta 48 horas antes, según lo  acordado. Expreso no tener patologías cardíacas, psiquiátricas como bipolaridad, depresión, esquizofrenia, ACV, y/o estar embarazada. En caso de tener algunos de estas condiciones se puede tratar mediante otra persona que concurrirá a la sesión y llamamos a través de un Tercero, ya que todos somos uno y al sanar él sanás vos también.";

const Agreement = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [option, setOption] = useState("");
  const [sintoma, setSintoma] = useState("");

  const wame = "https://wa.me/5493435267411?text=";
  const sendWsp = () => {
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (name !== "" && date !== "" && option !== "" && sintoma !== "") {
      if (!date.match(datePattern)) {
        alert("Por favor, ingresa una fecha en el formato DD/MM/AAAA válido.");
        setDate("");
      } else {
        window.open(
          `${wame}★ Solicitud de Biodecodificacion ★%0D%0A%0D%0A✦ Nombre:%20${name}%0D%0A✦ Fecha%20de%20Nacimiento:%20${date}%0D%0A✦ Modalidad:%20${option}%0D%0A✦ Síntomas:%20${sintoma}%20 %0D%0A✓ ${confirm}`,
          "_blank"
        );

        setDate("");
        setName("");
        setOption("");
        setSintoma("");
      }
    } else {
      alert("Por favor, completa el formulario.");
    }
  };

  return (
    <div className="allscreen">
      <div className={style.biggerCard}>
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
            <h4>FORMULARIO DE CONSENTIMIENTO PARA INICIO DE CONSULTA</h4>
            <p>{confirm}</p>
          </div>
          <div className={style.allWidth}>
            <button
              className={`primaryBtn ${style.buttonWith}`}
              onClick={() => sendWsp()}
            >
              Aceptar y enviar solicitud
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Agreement;
