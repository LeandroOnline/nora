export const sendWsp = (
  name = "",
  date = "",
  option = "",
  sintoma = "",
  bio = false,
  slug='',
) => {
  const wame = "https://wa.me/5493435267411?text=";
  const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
  if (bio) {
    if (name !== "" && date !== "" && option !== "" && sintoma !== "") {
      if (!date.match(datePattern)) {
        alert("Por favor, ingresa una fecha en el formato DD/MM/AAAA válido.");
        setDate("");
      } else {
        window.open(
          `${wame}★ Solicitud de Biodecodificacion ★%0D%0A%0D%0A✦ Nombre:%20${name}%0D%0A✦ Fecha%20de%20Nacimiento:%20${date}%0D%0A✦ Modalidad:%20${option}%0D%0A✦ Síntomas:%20${sintoma}%20 %0D%0A✓ ${confirm}`,
          "_blank"
        );
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
