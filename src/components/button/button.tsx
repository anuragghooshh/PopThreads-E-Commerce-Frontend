import './button.scss';

interface Props {
  type: string,
  text: string,
  color: string,
  onClick?: ()=>void;
}
const Button = (props: Props) => {
  return (
    <button className={`${props.type} ${props.color} button`} onClick={props.onClick}>
      <p>{props.text}</p>
      <p>{props.text}</p>
    </button>
  );
}

export default Button;
