const Button = ({ title, onClick, backgroundColor, border }) => {
  const buttonStyle = `inline-block p-2 px-12 text-sm text-center text-white rounded-full font-Montserrat ${backgroundColor} ${border}`;
  return (
    <button onClick={onClick} className={buttonStyle}>
      {title}
    </button>
  );
};

export default Button;
