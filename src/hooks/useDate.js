import { format } from "date-fns";
import es from "date-fns/locale/es";
export default function useDate() {
  const dia = new Date();
  const año = dia.getFullYear(); // Obtiene el año (ejemplo: 2023)
  const mes = String(dia.getMonth() + 1).padStart(2, "0"); // Obtiene el mes (ejemplo: 08)
  const día = String(dia.getDate()).padStart(2, "0"); // Obtiene el día (ejemplo: 21)

  const currentDay = `${año}-${mes}-${día}`;
  const weeksDays = ["Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const AllweeksDays = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  function dateFormat_YMD(date) {
    const dia = new Date(date);

    const año = dia.getFullYear(); // Obtiene el año (ejemplo: 2023)
    const mes = String(dia.getMonth() + 1).padStart(2, "0"); // Obtiene el mes (ejemplo: 08)
    const día = String(dia.getDate()).padStart(2, "0"); // Obtiene el día (ejemplo: 21)

    return `${año}-${mes}-${día}`;
  }

  return { currentDay, dateFormat_YMD, weeksDays };
}
