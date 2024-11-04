import React from "react";

interface DsInputProps {
  label: string;
  hint?: string;
  name: string;
  error: string;
  value: string;
  onChange: (data: string) => void;
  type?: string;
}

const DsInput: React.FC<DsInputProps> = ({
  type,
  label,
  error,
  value,
  name,
  hint,
  onChange,
}: DsInputProps) => {
  const errorId = name + "-error-message";
  const hintId = name + "-hint-text";
  return (
    <div className={`ds_question ${error ? "ds_question--error" : ""}`}>
      <label className="ds_label" htmlFor={name}>
        {label}
      </label>
      {hint && (
        <p className="ds_hint-text" id={hintId}>
          {hint}
        </p>
      )}
      {error && (
        <>
          <p className="ds_question__error-message" id={errorId}>
            <span className="visually-hidden">Error:</span> {error}
          </p>
        </>
      )}
      <input
        type={type || "text"}
        placeholder={label}
        name={name}
        id={name}
        className={`ds_input ${error ? "ds_input--error" : ""}`}
        value={value}
        onChange={(e) => onChange(e)}
        aria-describedby={errorId + " " + hintId}
      />
    </div>
  );
};

export default DsInput;
