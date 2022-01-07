import classes from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={classes.container}>
      <div className={classes.wave}></div>

      <div className="p-8 text-white">
        <h1 className="text-5xl">Hi! I`m Felipe Ruiz</h1>
        <p className="my-8 w-3/5">
          Full Stack web developer with more than 6 years of experience working
          with technologies such as React, NextJS, Typescript and much more
        </p>
      </div>
    </section>
  );
};
