interface DsCheckboxSingleProps {
  hint?: string;
  label: string;
  name: string;
  error: string;
  checked: boolean;
  onChange: (data: boolean) => void;
}

const DsChackboxSingle: React.FC<DsCheckboxSingleProps> = ({
  hint,
  label,
  name,
  error,
  checked,
  onChange,
}) => {
  const errorId = name + "-error-message";
  const hintId = name + "-hint-text";
  return (
    <div className="ds_question">
      {hint && (
        <p className="ds_hint-text" id="ds_hint">
          {hint}
        </p>
      )}

      {error && (
        <>
          <p className="ds_question__error-message">
            <span className="visually-hidden">Error:</span> {error}
          </p>
        </>
      )}
      <div className="ds_checkbox">
        <input
          className={`ds_checkbox__input ${
            error ? "ds_checkbox__input--error" : ""
          }`}
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e)}
          aria-describedby={errorId + " " + hintId}
        />
        <label className="ds_checkbox__label" htmlFor={name}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default DsChackboxSingle;
