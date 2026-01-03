import React, { useState } from "react";
import ConsultaRapidaCard from "../cards/ConsultaRapida";
import Emergencia from "../cards/Emergencia";
import AlumbradoPublico from "../cards/AlumbradoPublico";
import SeguimientoAlpEmergenciaDentroPlazo from "../cards/SeguimientoAlpEmergenciaDentroPlazo";
import Solicitud from "../cards/Solicitud";
import SeguimientoSolicitud from "../cards/seguimientoSolicitud";

const SlideCard = () => {
  const cards = [
    { name: "Consulta Rápida", component: <ConsultaRapidaCard /> },
    { name: "Emergencia", component: <Emergencia /> },
    { name: "Alumbrado Público", component: <AlumbradoPublico /> },
    {
      name: "Seguimiento de ALP y Emergencia Dentro de Plazo",
      component: <SeguimientoAlpEmergenciaDentroPlazo />,
    },
    { name: "Solicitud", component: <Solicitud /> },
    { name: "Seguimiento de Solicitud", component: <SeguimientoSolicitud /> },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col mx-auto max-w-[1700px]">
      {/* ===== BOTONES ===== */}
      <div className="flex flex-wrap justify-center gap-4 m-4">
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition
        w-[48%] sm:w-auto
        ${
          activeIndex === index
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
          >
            {card.name}
          </button>
        ))}
      </div>
      {/* ===== SLIDER ===== */}
      <div className="relative w-full flex-1 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              {card.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
