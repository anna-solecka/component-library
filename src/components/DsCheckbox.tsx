interface DsCheckboxProps {
  hint?: string;
  legend: string;
  topics: string[];
}
const DsChackbox: React.FC<DsCheckboxProps> = ({
  hint,
  legend,
  topics,
}: DsCheckboxProps) => {
  return (
    <div className="ds_question">
      <fieldset aria-describedby="ds_hint">
        <legend>{legend}</legend>
        {hint && (
          <p className="ds_hint-text" id="ds_hint">
            {hint}
          </p>
        )}
        <div className="ds_field-group">
          {/* {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))} */}
          {topics.map((topic) => (
            <div className="ds_checkbox" key={topic}>
              <input
                className="ds_checkbox__input"
                id={topic}
                name={topic}
                type="checkbox"
              />
              <label className="ds_checkbox__label" htmlFor={topic}>
                {topic}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default DsChackbox;
