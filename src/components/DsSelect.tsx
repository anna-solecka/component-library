interface DsSelectProps {
  options: string[];
  title: string;
  name: string;
  onChange: (data: string) => void;
  error: string;
  value: string;
}
const DsSelect = ({
  options,
  title,
  name,
  error,
  onChange,
  value,
}: DsSelectProps) => {
  return (
    <div className={`ds_question ${error ? "ds_question--error" : ""}`}>
      <label className="ds_label" htmlFor={name}>
        {title}
      </label>
      {error && (
        <>
          <p className="ds_question__error-message">
            <span className="visually-hidden">Error:</span> {error}
          </p>
        </>
      )}
      <div className="ds_select-wrapper  ds_input--fluid-one-third">
        <select
          className="ds_select"
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value=""></option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="ds_select-arrow" aria-hidden="true"></span>
      </div>
    </div>
  );
};

export default DsSelect;
