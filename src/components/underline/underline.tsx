import './underline.scss'

interface Props{
    color? : "Light" | "Gray" | "Dark";
}

const Underline = (props:Props) => {
  return (
    <div className={`underline ${props.color}`}/>
  )
}

export default Underline;
