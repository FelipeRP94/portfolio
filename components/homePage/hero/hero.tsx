import {
  AiFillLinkedin,
  AiOutlineFilePdf,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { ButtonLink } from "../../ui/buttonLink";
import classes from "./hero.module.css";

export const Hero = () => (
  <section className={classes.hero} id="overview">
    <div className="p-12 text-white z-1">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="h-auto md:w-2/5">
          <h1 className="text-5xl mt-2 mb-12">Hi! I`m Felipe Ruiz</h1>
          <p className="my-4 text-justify">
            Full Stack web developer with more than 6 years of experience
            working with technologies such as React, NextJS, Typescript, .Net
            Core, etc. and
            <span className="underline"> Intermediate+ English profiency</span>.
          </p>
          <p className="my-4 mb-12 text-justify">
            I would define myself as a very confident person, centered on
            details and always help my teamates to reach the project goals.
          </p>
          <ButtonLink
            link="https://drive.google.com/file/d/1H9bfKOcKwkXsDxObGPbQXPuRErhO9eo3/view?usp=sharing"
            className="bg-transparent"
          >
            <span className="text-xl mr-2">
              <AiOutlineFilePdf />
            </span>
            <span>Download CV (PDF)</span>
          </ButtonLink>
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
