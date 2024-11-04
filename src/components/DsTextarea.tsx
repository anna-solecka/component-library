import React from "react";

interface DsTextareaProps {
  label: string;
  error: string;
  onChange: (data: string) => void;
  value: string;
  rows?: number;
  name: string;
  hint: string;
}

const DsTextarea: React.FC<DsTextareaProps> = ({
  rows,
  label,
  error,
  name,
  onChange,
  value,
  hint,
}: DsTextareaProps) => {
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
      <textarea
        rows={rows}
        placeholder={label}
        className={`ds_input ${error ? "ds_input--error" : ""}`}
        value={value}
        onChange={(e) => onChange(e)}
        name={name}
        id={name}
        aria-describedby={errorId + " " + hintId}
      />
    </div>
  );
};

export default DsTextarea;
