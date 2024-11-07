import React from "react";
import pdfFile from "./Docs/TérminosyCondicionesES.pdf"; 

const Terminosycondiciones = () => {
  return (
    <div className="h-screen w-full">
      <object
        data={pdfFile}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>Tu navegador no soporta visualización de PDF. <a href={pdfFile} download>Descargar PDF</a>.</p>
      </object>
    </div>
  );
};

export default Terminosycondiciones;
