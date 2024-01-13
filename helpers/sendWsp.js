export const sendWsp = (
  name = "",
  date = "",
  option = "",
  sintoma = "",
  bio = false,
  slug = ""
) => {
  const wame = "https://wa.me/5493435267411?text=";
  const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
  if (bio) {
    if (name !== "" && date !== "" && option !== "" && sintoma !== "") {
      if (!date.match(datePattern)) {
        alert("Por favor, ingresa una fecha en el formato DD/MM/AAAA válido.");
        setDate("");
      } else {
        const month = parseInt(date.split("/")[1], 10);
        if (month < 1 || month > 12) {
          alert("El mes debe estar en el rango de 1 a 12.");
        } else {
          window.open(
            `${wame}★ Solicitud de Biodecodificacion ★%0D%0A%0D%0A✦ Nombre:%20${name}%0D%0A✦ Fecha%20de%20Nacimiento:%20${date}%0D%0A✦ Modalidad:%20${option}%0D%0A✦ Síntomas:%20${sintoma}%20 %0D%0A✦ MANIFIESTO DE CONFORMIDAD: En búsqueda de mi bienestar físico, mental y emocional manifiesto mi voluntad de iniciar las consultas en Bioexistencia Consciente con la Consultora NORA BENITO, siendo totalmente responsable de mi decisión sabiendo que dichas consultas no reemplazan ni pretenden ser una práctica médica ni  psiquiátrica. Manifiesto no tener patologías cardíacas, ni psiquiátricas como bipolaridad, depresión ni esquizofrenia, ni haber tenido ACV y/o estar cursando embarazo. Si reconozco algunos de estas condiciones sé que un “tercero podrá concurrir por mí a la sesión que se llama “Atención a través de un tercero” ya que todos somos uno y al sanar él, sano yo, me comprometo a avisar a la Consultora.`,
            "_blank"
          );
        }
      }
    } else {
      alert("Por favor, completa el formulario.");
    }
  } else {
    if (name !== "" && date !== "" && option !== "") {
      if (!date.match(datePattern)) {
        alert("Por favor, ingresa una fecha en el formato DD/MM/AAAA válido.");
        setDate("");
      } else {
        window.open(
          `${wame}★ Solicitud de ${slug} ★%0D%0A✦ Nombre:%20${name}%0D%0A✦ Fecha%20de%20Nacimiento:%20${date}%0D%0A✦ Modalidad:%20${option}%0D%0A`,
          "_blank"
        );
      }
    } else {
      alert("Por favor, completa el formulario.");
    }
  }
};
