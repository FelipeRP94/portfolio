import {
  AiFillLinkedin,
  AiOutlineFilePdf,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { ButtonLink } from "../../ui/buttonLink";
import classes from "./hero.module.css";

export const Hero = () => (
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
            I would define myself as organized person, centered on details and a
            good coworker, always help my teamates to reach the project goals.
          </p>
          <p className="my-4">
            I&apos;ve had the opportunity to work in several companies with
            different types of projects. It has let me learn different cultures
            of working.
          </p>
          <p className="my-4 mb-12">
            For me, training is indispensable in my career as a developer. I
            like to learn the latest technologies and be up to date. For this
            reason, the ideal company for me has to implement a good career plan
            that their employees can keep growing.
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
