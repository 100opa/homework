import ChoicedItem from "./ChoicedItem";

const ChoicedList = (props) => {
  return (
    <ul className="choiced-list">
      {props.data.map(item => (
        <ChoicedItem data={item}/>
      ))
      }
    </ul>
  )
}

export default ChoicedList;