import React from "react";
import CopySpeech from "../CopySpeech";
import accionComentarioSolicitud from "../../assets/images/accionComentarioSolicitud.webp";

const Solicitud = () => {
  return (
    <div className="w-full shadow-md border border-gray-100 my-5 px-5 rounded-md">
      {/* ===== TÍTULO DE SECCIÓN ===== */}
      <h2 className="text-xl font-bold mt-4 text-center">
        REGISTRO DE SOLICITUD
      </h2>

      <div className="flex flex-col xl:flex-row items-stretch gap-5 w-full p-4">
        {/* ===== PRIMER CONTAINER DE CARDS ===== */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5 shadow-md p-6 border border-gray-100 text-center rounded-md">
          {/* Card Responsable */}
          <div className="flex flex-col gap-2 h-full">
            <h3 className="shadow h-12 flex items-center justify-center border border-gray-100 rounded font-bold bg-white">
              Responsable
            </h3>
            <div className="shadow-md flex-1 flex items-center justify-center bg-yellow-200 rounded">
              <p className="p-3 flex items-center justify-center h-full w-full">
                INBOUND
              </p>
            </div>
          </div>

          {/* Card Motivo/Submotivo */}
          <div className="flex flex-col gap-2 h-full">
            <h3 className="shadow h-12 flex items-center justify-center border border-gray-100 rounded font-bold bg-white">
              Motivo / Submotivo
            </h3>
            <div className="shadow-md flex-1 flex items-center justify-center bg-red-100 rounded">
              <p className="p-3 flex items-center justify-center h-full w-full">
                (Sujeto a casuística)
              </p>
            </div>
          </div>

          {/* Card ¿Dónde agregar Speech? */}
          <div className="flex flex-col gap-2 h-full">
            <h3 className="shadow h-12 flex items-center justify-center border border-gray-100 rounded font-bold bg-white">
              ¿Dónde agregar speech?
            </h3>

            <div className="shadow-md flex-1 grid gap-2 bg-fuchsia-200 rounded p-2">
              <div className="flex flex-col items-center justify-between p-2">
                <p className="pb-2">Agregar acción / Comentario</p>
                <div className="w-full h-24 shadow bg-white rounded-md flex items-center justify-center overflow-hidden">
                  <img
                    src={accionComentarioSolicitud}
                    alt="accionComentarioSolicitud"
                    className="w-36 h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEGUNDO CONTAINER DE CARDS ===== */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-5 shadow-md p-6 border border-gray-100 text-center rounded-md">
          {/* Card Momento */}
          <div className="flex flex-col gap-2 h-full">
            <h3 className="shadow h-12 flex items-center justify-center bg-white border border-gray-100 rounded font-bold">
              Momento
            </h3>
            <div className="shadow-md flex-1 grid gap-2 bg-sky-200 rounded p-2">
              <p className="bg-white shadow rounded-md flex items-center justify-center p-3">
                * Solicitud sin ORM
                <br /> * Solicitud con ORM
                <br /> * Solicitud facturación fundada
                <br /> * Solicitud facturación infundada
              </p>
            </div>
          </div>

          {/* Card Speech */}
          <div className="flex flex-col gap-2 h-full col-span-1 md:col-span-2">
            <h3 className="shadow h-12 flex items-center justify-center bg-white border border-gray-100 rounded font-bold">
              Speech a colocar
            </h3>

            <div className="shadow-md flex-1 grid gap-2 bg-green-200 rounded p-2">
              <CopySpeech
                text={`Hemos generado su requerimiento Nro. [Número de caso]; con este número puedes hacer seguimiento al estado de tu requerimiento.`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solicitud;
