import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import classes from "./hero.module.css";

export const Hero = () => (
  <section className={classes.hero} id="overview">
    <div className="p-12 text-white z-1">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="h-auto md:w-2/5">
          <h1 className="text-5xl mt-12 mb-20">Hi! I`m Felipe Ruiz</h1>
          <p className="my-4">
            Full Stack web developer with more than 6 years of experience
            working with technologies such as React, NextJS, Typescript and much
            more
          </p>
          <p className="my-4">
            I would define myself as a very confident person, centered on
            details and always help my teamates to reach the project goals
          </p>
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
