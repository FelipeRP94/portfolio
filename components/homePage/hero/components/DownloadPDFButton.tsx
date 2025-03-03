"use client";

import { usePDF } from "@react-pdf/renderer";
import { CvPDF } from "../../../cvPDF/CvPDF";
import { DownloadCVButton } from "../hero.styles";
import { AiOutlineFilePdf } from "react-icons/ai";

const DownloadPDFButton = () => {
  const [instance] = usePDF({ document: <CvPDF /> });

  return (
    <DownloadCVButton
      download="Felipe Ruiz Pinto.pdf"
      href={instance.url ?? ""}
    >
      <span className="text-xl mr-2">
        <AiOutlineFilePdf />
      </span>
      <span>Download CV (PDF)</span>
    </DownloadCVButton>
  );
};

export default DownloadPDFButton;
