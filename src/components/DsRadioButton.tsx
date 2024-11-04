interface DsRadioOptionProps {
  value: string;
  displayName: string;
}

interface DsRadioButtonProps {
  options: DsRadioOptionProps[];
  label: string;
  hint?: string;
  error: string;
  name: string;
  value: string;
  onChange: (data: string) => void;
}

const DsRadioButton: React.FC<DsRadioButtonProps> = ({
  options,
  label,
  error,
  hint,
  name,
  value,
  onChange,
}: DsRadioButtonProps) => {
  return (
    <fieldset name={name}>
      {error && (
        <>
          <p className="ds_question__error-message">
            <span className="visually-hidden">Error:</span> {error}
          </p>
        </>
      )}
      <legend>{label}</legend>
      <p className="ds_hint-text">{hint}</p>
      <div className="ds_field-group">
        {options.map((option) => (
          <div className="ds_radio" key={option.value}>
            <input
              className={`ds_radio__input ${
                error ? "ds_radio__input--error" : ""
              }`}
              id={name + option.value}
              name={name}
              type="radio"
              value={option.value}
              onChange={(e) => onChange(e)}
              checked={value === option.value}
              aria-describedby={
                name + "-error-message" + " " + name + "-hint-text"
              }
            />
            <label className="ds_radio__label" htmlFor={name + option.value}>
              {option.displayName}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default DsRadioButton;
