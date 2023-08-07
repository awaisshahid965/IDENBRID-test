import React, { FC, ChangeEvent } from "react";
import inputStyles from "./input.module.scss";

interface InputProps {
  name: string;
  type: "text" | "number";
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

const Input: FC<InputProps> = ({
  name,
  type,
  placeholder = "",
  label = "",
  value = "",
  onChange,
  readOnly = false,
}) => {
  return (
    <div className={inputStyles["input"]}>
      {label && (
        <label className={inputStyles["input__label"]} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={value ?? ""}
        className={inputStyles["input__field"]}
        readOnly={readOnly}
      />
    </div>
  );
};

export default Input;
