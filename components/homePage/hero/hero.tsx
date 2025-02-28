import {
  AiFillLinkedin,
  AiOutlineFilePdf,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import classes from "./hero.module.css";
import { useEffect, useState } from "react";
import { DownloadCVButton, SocialMediaIcon } from "./hero.styles";
import dynamic from "next/dynamic";
import Image from "next/image";

const CvPDF = dynamic(
  () => import("../../cvPDF/CvPDF").then((mod) => mod.CvPDF),
  {
    ssr: false,
  }
);

export const Hero = () => {
  const [renderPDFButton, setRenderPDFButton] = useState<boolean>(false);

  useEffect(() => {
    setRenderPDFButton(true);
  }, []);

  return (
    <section className={classes.hero} id="aboutme">
      <Image
        src="/images/hero.webp"
        priority={true}
        layout="fill"
        loading="eager"
      />
      <div className="p-12 text-white z-10 relative">
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
            <p className="my-4 mb-12">
              For me, training is indispensable in my career as a developer. I
              like to learn the latest technologies and be up to date. For this
              reason, the ideal company for me has to implement a good career
              plan that their employees can keep growing.
            </p>
            {renderPDFButton && (
              <DownloadCVButton
                document={<CvPDF />}
                fileName="CV Felipe Ruiz Pinto.pdf"
              >
                <span className="text-xl mr-2">
                  <AiOutlineFilePdf />
                </span>
                <span>Download CV (PDF)</span>
              </DownloadCVButton>
            )}
          </div>

          <div className="flex my-8 md:m-0 items-end">
            <SocialMediaIcon
              href="https://linkedin.com/in/felipe-ruiz-pinto-210a63151"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <AiFillLinkedin />
            </SocialMediaIcon>
            <SocialMediaIcon
              href="https://github.com/FelipeRP94"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <AiOutlineGithub />
            </SocialMediaIcon>
            <SocialMediaIcon href="mailto:ruizpintofelipe@gmail.com">
              <AiOutlineMail />
            </SocialMediaIcon>
          </div>
        </div>
      </div>
    </section>
  );
};
