import clsx from "clsx";
import React from "react";

interface Props {
  link?: string;
  className: string;
  children: React.ReactNode;
}

export const ButtonLink = (props: Props) => (
  <a
    href={props.link}
    rel="nofollow noopener noreferrer"
    target="_blank"
    className={clsx([
      "w-full md:w-64 py-4 px-2 my-2 flex items-center justify-center rounded-md border-2 text-white border-white",
      props.className,
    ])}
  >
    {props.children}
  </a>
);
