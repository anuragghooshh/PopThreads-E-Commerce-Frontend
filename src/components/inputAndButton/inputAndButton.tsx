import Button from '../button/button';
import './inputAndButton.scss';

interface Props{
    btnText : string
}

const InputAndButton = (props:Props) => {
  return (
    <div className='inputAndBtn'>
      <input type="text" placeholder='Your email address'/>
      <Button type='filled' color='dark' text={props.btnText}/>
    </div>
  )
}

export default InputAndButton;