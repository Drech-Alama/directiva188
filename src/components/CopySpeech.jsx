import { useState } from "react";

const CopySpeech = ({ text, copyable = true }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!copyable) return;

    // 🔹 Limpia saltos de línea e indentación
    const cleanText = text.replace(/\s+/g, " ").trim();

    await navigator.clipboard.writeText(cleanText);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-md shadow flex flex-col lg:flex-row overflow-hidden">
      {/* Texto */}
      <p className="flex-1 p-3 flex items-center justify-center text-center text-sm">
        {text}
      </p>

      {copyable && (
        <button
          onClick={handleCopy}
          disabled={copied}
          className={`w-full lg:w-36
  h-14 lg:h-auto
  border-t lg:border-t-0 lg:border-l
  flex items-center justify-center gap-2
  text-base lg:text-sm
  font-semibold transition
  cursor-pointer
  ${
    copied
      ? "bg-blue-700 text-white cursor-default"
      : "bg-blue-600 hover:bg-blue-700 text-white"
  }`}
        >
          {copied ? (
            "✓ Copiado"
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h7l5 5v8a2 2 0 01-2 2z"
                />
              </svg>
              Copiar
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default CopySpeech;
