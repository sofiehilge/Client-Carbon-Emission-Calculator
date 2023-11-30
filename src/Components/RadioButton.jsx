const RadioButton = ({ options, onChange, selectedValue }) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option.value} className="inline-flex items-center radio-label">
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option)}
            className="form-radio h-5 w-5 text-green-600 radio-input"
          />
          <span className="ml-2 text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
