

const Question = ({ title, options, onChange }) => {
  return (
    <div>
      <h1>{title}</h1>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            id={option.value}
            name="options"
            value={option.value}
            onChange={() => onChange(option.value)}
            className="radio-input"
          />
          <label htmlFor={option.value} className="radio-label">{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default Question;
