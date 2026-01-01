import React from "react";
import SlideCard from "../components/slider/SlideCard";

const Home = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] gap-3">
      <header className="w-full bg-gray-100 border border-gray-100 shadow-md">
        <div className="flex items-center justify-center gap-3 p-4">
          <img
            src="/logoDirectiva188.png"
            alt="Logo Directiva 188"
            className="h-10 w-auto object-contain"
          />
          <h1 className="text-xl font-bold text-center">DIRECTIVA 188</h1>
        </div>
      </header>
      <main className="overflow-hidden">
        <div className="mx-auto w-full max-w-3xl p-3 sm:p-4 m-2 sm:mb-5 border-l-4 border-blue-600 bg-blue-50 text-blue-800 rounded shadow-sm text-center">
          <strong className="block mb-1 uppercase tracking-wide text-sm sm:text-base">
            Nota importante
          </strong>
          <p className="md:text-md sm:text-sm leading-relaxed">
            Es obligatorio retirar los corchetes y asegurar una adecuada
            ortografía y redacción del contenido.
          </p>
        </div>
        <SlideCard />
      </main>
      <footer className="w-full text-center p-5 bg-gray-100 border-t border-gray-200 text-sm text-gray-800">
        <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
        <p className="mt-1">
          Plataforma desarrollada por{" "}
          <span className="font-semibold text-blue-600">Drech.</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
