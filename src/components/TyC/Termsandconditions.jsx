import React from "react";
import pdfFile from "./Docs/Terms&ConditionsEN.pdf"; 

const Termsandconditions = () => {
  return (
    <div className="h-screen w-full">
      <object
        data={pdfFile}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>Your browser does not support PDF viewing. <a href={pdfFile} download>Download PDF</a>.</p>
      </object>
    </div>
  );
};

export default Termsandconditions;
