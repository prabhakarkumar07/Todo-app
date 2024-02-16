import { useRef } from "react";
import { IoBagAdd } from "react-icons/io5";

function AddTODo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");

  const todoNameElement = useRef(0);
  const todoDateElement = useRef(0);

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="Enter ToDo Here"
            //value={todoName}
            //onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input
            ref={todoDateElement}
            type="date"
            //value={dueDate}
            // onChange={handleDateChange}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="submit"
            onSubmit={handleAddButtonClicked}
            className="btn btn-success kg-button"
            // onClick={handleAddButtonClicked}
          >
            <IoBagAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTODo;
