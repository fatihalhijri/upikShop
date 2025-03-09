import clsx from "clsx";

interface InputProps {
  isError?: boolean;
  messageError?: string;
  id: string | number;
  name: string;
  value: string | number | undefined;
}

const InputText: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  messageError = "wajib  donk",
  isError = false,
  id,
  name,
  value,
  ...props
}) => {
  return (
    <section>
      <input
        value={value}
        id={id}
        name={name}
        className={clsx(`w-full h-10 border rounded px-2`, {
          "border-red-500 border-2": isError,
          "border-gray-700": !isError,
        })}
        {...props}
      />
      {isError ? (
        <p className="text-red-500 font-bold">{messageError}</p>
      ) : (
        <></>
      )}
    </section>
  );
};

export default InputText;
