const RadioButton = ({ options, onChange, selectedValue }) => {
  return (
    <div className="flex flex-wrap">
      {options.map((option) => (
        <label
          key={option.value}
          className={`inline-flex items-center radio-label m-2 ${selectedValue === option.value ? 'radio-label-selected' : ''}`}
        >
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option)}
            className="form-radio h-2 w-5 radio-input"
          />
          <span className="text-sm text-center rounded-full font-Montserrat text-gray-700 cursor-pointer">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
