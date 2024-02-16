import ToDoItem from "./ToDoItem";
import styles from "./TodoItems.module.css";
const ToDoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className={styles.itemContainer}>
        {todoItems.map((item) => (
          <ToDoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          ></ToDoItem>
        ))}
      </div>
    </>
  );
};
export default ToDoItems;
