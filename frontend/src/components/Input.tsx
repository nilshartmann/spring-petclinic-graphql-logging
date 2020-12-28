import * as React from "react";

type InputProps = {
  disabled?: boolean;
  error?: string | boolean | null;
  id?: string;
  label: string;
  name?: string;
  type?: "text" | "password";
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { disabled, error, id, label, name, type = "text" },
  ref
) {
  return (
    <div className="py-3.5">
      <div className="col-span-3 sm:col-span-2">
        <label className="block">
          {label}
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              ref={ref}
              type={type}
              name={name}
              id={id}
              disabled={disabled}
              className="flex-1 focus:ring-3 hover:border-spr-green focus:border-spr-green focus:ring-spr-green"
            />
          </div>
        </label>
        {typeof error === "string" && <p className="text-spr-red">{error}</p>}
      </div>
    </div>
  );
});

export default Input;
