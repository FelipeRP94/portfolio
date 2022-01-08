import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import classes from "./hero.module.css";

export const Hero = () => (
  <section className={classes.hero}>
    <div className="p-12 text-white z-1">
      <h1 className="text-5xl">Hi! I`m Felipe Ruiz</h1>
      <div className="flex justify-between my-12 flex-col md:flex-row">
        <p className="md:w-2/5">
          Full Stack web developer with more than 6 years of experience working
          with technologies such as React, NextJS, Typescript and much more
        </p>
        <div className="flex my-8 md:m-0">
          <a
            className="text-4xl cursor-pointer"
            href="https://linkedin.com/in/felipe-ruiz-pinto-210a63151"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="text-4xl mx-2 cursor-pointer"
            href="https://github.com/FelipeRP94"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <AiOutlineGithub />
          </a>
        </div>
      </div>
    </div>
  </section>
);
