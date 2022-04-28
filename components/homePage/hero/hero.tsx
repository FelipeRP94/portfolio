import { PDFDownloadLink } from "@react-pdf/renderer";
import {
  AiFillLinkedin,
  AiOutlineFilePdf,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { CvPDF } from "../../cvPDF/CvPDF";
import classes from "./hero.module.css";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [renderPDFButton, setRenderPDFButton] = useState<boolean>(false);

  useEffect(() => {
    setRenderPDFButton(true);
  }, []);

  return (
    <section className={classes.hero} id="aboutme">
      <div className="p-12 text-white z-1">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="h-auto md:w-3/5 text-justify font-bold">
            <h1 className="text-5xl mt-2 mb-12">Hi! I&apos;m Felipe Ruiz</h1>
            <p className="my-4">
              Full Stack Web Developer with more than 6 years of experience
              working with technologies such as React, NextJS, Typescript and
              Back-End technologies like .Net Core above all. Also, I have&nbsp;
              <span className="underline">Intermediate+ English profiency</span>
              &nbsp;and I keep study to improve my level.
            </p>
            <p className="my-4">
              I would define myself as organized person, centered on details and
              a good coworker, always help my teamates to reach the project
              goals.
            </p>
            <p className="my-4">
              I&apos;ve had the opportunity to work in several companies with
              different types of projects. It has let me learn different
              cultures of working.
            </p>
            <p className="my-4 mb-12">
              For me, training is indispensable in my career as a developer. I
              like to learn the latest technologies and be up to date. For this
              reason, the ideal company for me has to implement a good career
              plan that their employees can keep growing.
            </p>
            {renderPDFButton && (
              <PDFDownloadLink
                document={<CvPDF />}
                fileName="CV Felipe Ruiz Pinto.pdf"
                className={
                  "w-full md:w-64 py-4 px-2 my-2 flex items-center justify-center rounded-md border-2 text-white border-white"
                }
              >
                <span className="text-xl mr-2">
                  <AiOutlineFilePdf />
                </span>
                <span>Download CV (PDF)</span>
              </PDFDownloadLink>
            )}
          </div>

          <div className="flex my-8 md:m-0 items-end">
            <a
              className="text-4xl mr-1 cursor-pointer"
              href="https://linkedin.com/in/felipe-ruiz-pinto-210a63151"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="text-4xl mx-1 cursor-pointer"
              href="https://github.com/FelipeRP94"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <AiOutlineGithub />
            </a>
            <a
              className="text-4xl mx-1 cursor-pointer"
              href="mailto:felipe.r.p.1994@gmail.com"
            >
              <AiOutlineMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
