import './button.scss';

interface Props{
    type : string,
    text : string,
    color : string,
}
const Button = (props:Props) => {
  return(
    <button className={`${props.type} ${props.color} button`}>
        <p>{props.text}</p>
        <p>{props.text}</p>
    </button>
  );
}

export default Button;
