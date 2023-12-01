import Emoji from "./Emoji";

const RadioButton = ({ options, onChange, selectedValue }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {options.map((option) => (
        <label
          key={option.value}
          className={`inline-flex items-center radio-label m-2 ${
            selectedValue === option.value ? "radio-label-selected" : ""
          }`}
        >
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option)}
            className="w-5 h-2 form-radio radio-input"
          />
          <span className="text-sm text-center text-gray-700 rounded-full cursor-pointer font-Montserrat">
            <Emoji symbol={option.emoji} label={option.emojiLabel} />
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
