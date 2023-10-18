import style from "../page.module.css";

const Agreement = () => {
  return (
    <div className="allscreen">
      <div className="bigcard">
        <form className={style.form}>
          <div className={style.inputContainer}>
            <p>Nombre completo</p>
            <input placeholder="..." className={style.inputName} />
          </div>
          <div className={style.inputContainer}>
            <p>Fecha de nacimiento</p>
            <input placeholder="**/**/****" className={style.inputName} />
          </div>
          <div className={style.inputContainer}>
            <p>Modalidad</p>
            <select className={style.select} >
              <option>▾ Online</option>
              <option>▾ Presencial</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Agreement;
