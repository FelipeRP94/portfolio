interface Props {
  id: string;
  label: string;
  value: string;
  type?: string;
  name: string;
  className?: string;
  onChange(value: string): void;
}

export const InputText = ({
  id,
  label,
  value,
  type,
  name,
  className,
  onChange,
}: Props) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="text-slate-500 mb-2">
      {label}
    </label>
    <input
      id={id}
      type={type || "text"}
      name={name}
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
      className={`focus:outline-none focus:border-sky-500 focus:ring-sky-500
        mb-6 p-2 rounded-md border-2 border-slate-500 w-80 hover:border-slate-700
        ${className}`}
    />
  </div>
);
