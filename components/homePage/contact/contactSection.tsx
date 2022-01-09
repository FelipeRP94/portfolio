import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import classes from "./contactSection.module.css";
import { ButtonLink } from "../../ui/buttonLink";
import clsx from "clsx";

export const ContactSection = () => (
  <section
    className="bg-sky-900 p-8 md:p-12 mt-12 text-white pb-36"
    id="contact"
  >
    <h1 className="text-center text-4xl font-bold my-12">Contact</h1>
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5">
        <p className="my-4 text-justify">
          Do you want to contact with me? Send me an email or visit my LinkedIn
          profile.
        </p>
        <p className="my-4 text-justify">
          Take a look to my projects in GitHub for checking my programming
          skills. You can download the projects and even send me PR to improve
          them.
        </p>
        <ButtonLink
          link="mailto:felipe.r.p.1994@gmail.com"
          className={classes.email}
        >
          <span className="text-xl mr-2">
            <AiOutlineMail />
          </span>
          <span>Send me an email</span>
        </ButtonLink>
      </div>

      <div className="gap-2 flex md:flex-col md:justify-start md:items-end flex-row md:w-3/5">
        <ButtonLink
          link="https://linkedin.com/in/felipe-ruiz-pinto-210a63151"
          className={classes.linkedin}
        >
          <span className="text-xl mr-2">
            <AiFillLinkedin />
          </span>
          <span>LinkedIn profile</span>
        </ButtonLink>
        <ButtonLink
          link="https://linkedin.com/in/felipe-ruiz-pinto-210a63151"
          className={classes.github}
        >
          <span className="text-xl mr-2">
            <AiOutlineGithub />
          </span>
          <span>GitHub profile</span>
        </ButtonLink>
      </div>
    </div>
  </section>
);
