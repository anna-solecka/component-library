import React from "react";

interface DsTextareaProps {
  label: string;
  error: string;
  onChange: (data: string) => void;
  value: string;
  rows?: number;
  name: string;
}

const DsTextarea: React.FC<DsTextareaProps> = ({
  rows,
  label,
  error,
  name,
  onChange,
  value,
}: DsTextareaProps) => {
  return (
    <div className={`ds_question ${error ? "ds_question--error" : ""}`}>
      <label className="ds_label">{label}</label>
      {error && (
        <>
          <p
            className="ds_question__error-message"
            id="error-message-more-detail"
          >
            <span className="visually-hidden">Error:</span> {error}
          </p>
        </>
      )}
      <textarea
        rows={rows}
        placeholder={label}
        className={`ds_input ${error ? "ds_input--error" : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        name={name}
        id={name}
      />
    </div>
  );
};

export default DsTextarea;
