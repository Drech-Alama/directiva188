import React from "react";
import CopySpeech from "../CopySpeech";
import observacionesInternasEmergencia from "../../assets/images/observacionesInternasEmergencia.webp";
import descripcionEmergencia from "../../assets/images/descripcionEmergencia.webp";

const Emergencia = () => {
  return (
    <div className="w-full shadow-md border border-gray-100 my-5 px-5 rounded-md">
      {/* ===== TÍTULO DE SECCIÓN ===== */}
      <h2 className="text-xl font-bold mt-4 text-center">
        REGISTRO DE EMERGENCIA
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
                (Sujeto a casuística de la emergencia reportada)
              </p>
            </div>
          </div>

          {/* Card ¿Dónde agregar Speech? */}
          <div className="flex flex-col gap-2 h-full">
            <h3 className="shadow h-12 flex items-center justify-center border border-gray-100 rounded font-bold bg-white">
              ¿Dónde agregar speech?
            </h3>

            <div className="shadow-md flex-1 grid grid-rows-2 gap-2 bg-fuchsia-200 rounded p-2">
              <div className="flex flex-col items-center justify-center p-2">
                <p className="pb-2">Observaciones internas</p>
                <div className="w-full h-24 shadow bg-white rounded-md flex items-center justify-center overflow-hidden">
                  <img
                    src={observacionesInternasEmergencia}
                    alt="observacionesInternasEmergencia"
                    className="w-36 h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-2">
                <p className="pb-2">Descripción</p>
                <div className="w-full h-24 shadow bg-white rounded-md flex items-center justify-center overflow-hidden">
                  <img
                    src={descripcionEmergencia}
                    alt="descripcionEmergencia"
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
            <div className="shadow-md flex-1 grid grid-rows-2 gap-2 bg-sky-200 rounded p-2">
              <p className="bg-white shadow rounded-md flex items-center justify-center p-3">
                Registro de la emergencia
              </p>
              <p className="bg-white shadow rounded-md flex items-center justify-center p-3">
                Registro de la emergencia
              </p>
            </div>
          </div>

          {/* Card Speech */}
          <div className="flex flex-col gap-2 h-full col-span-1 md:col-span-2">
            <h3 className="shadow h-12 flex items-center justify-center bg-white border border-gray-100 rounded font-bold">
              Speech a colocar
            </h3>

            <div className="shadow-md flex-1 grid grid-rows-2 gap-2 bg-green-200 rounded p-2">
              <CopySpeech
                text={`Cliente reporta [detalle de la emergencia]. Se ha generado la emergencia con N° [número de emergencia] será atendido dentro de las próximas horas.`}
              />

              <CopySpeech
                text="Coloca el CONNID de tu llamada y datos relevantes."
                copyable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergencia;
