import Emoji from "./Emoji";

const RadioButton = ({ options, onChange, selectedValue }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {options.map((option) => (
        <label
          key={option.value}
          className={`inline-flex items-center radio-label m-1 ${
            selectedValue == option.value ? "radio-label-selected" : ""
          }`}
        >
          <input
            type="radio"
            value={option.value}
            checked={selectedValue == option.value}
            onChange={() => {console.log(`Selected value: ${selectedValue}, Option value: ${option.value}`);
            onChange(option);
        }}
            className="form-radio radio-input"
          />
          <span className="text-xs text-center text-gray-700 rounded-full cursor-pointer font-Montserrat">
            <Emoji symbol={option.emoji} label={option.emojiLabel} />
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
