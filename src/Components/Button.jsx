const Button = ({title, onClick}) => {
    return (<button onClick={onClick} className="bg-black text-white rounded-full px-[1.25rem] py-[1.15rem] font-Inter">{title}</button>  );
}
 
export default Button;