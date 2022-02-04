interface Props {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?(): void;
}

export const Button = ({ text, className, type, onClick }: Props) => (
  <button
    onClick={onClick}
    type={type || "button"}
    className={`p-2 w-80 border-2 rounded-md bg-sky-500 text-white border-2 border-white hover:bg-sky-600 ${className}`}
  >
    {text}
  </button>
);
