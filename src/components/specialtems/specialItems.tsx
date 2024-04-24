import './specialItems.scss';

interface Props{
    title : String,
    items : React.ReactNode[]
}

const SpecialItems = (props:Props) => {
  return (
    <div className='spclItems'>
      <h2>{props.title}</h2>
      <div className="itemsHolder">
        {
          props.items.map((item) =>(
            <>{item}</>
          ))
        }
      </div>
    </div>
  )
}

export default SpecialItems;
