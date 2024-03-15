import { UseTodoApp } from "../hooks/UseTodoApp";
import { useContext } from "react";
import PropTypes from 'prop-types'
import { TodoContext } from "../../core/context/TodoContext";
import "../styles/styles.css";
import ProgressEmptyIcon from "../../core/Icons/ProgressEmptyIcon";
import { InProgressIcon } from "../../core/Icons/InProgressIcon";
import { FinishedProgressIcon } from "../../core/Icons/FinishedProgressIcon";
import { UpdateIcon } from "../../core/Icons/UpdateIcon";
import { DeleteIcon } from "../../core/Icons/DeleteIcon";



export const TodoCard = ({ todos = []  }) => {
  const { id, item, priority } = todos;
  const { onProgressButton, progress } = UseTodoApp();
  const {updateItem, deleteItem } = useContext(TodoContext);

  return (
    <>
   
      <div className="task">
        <div className="information column">
          <span className="information__title">Task</span>
          <span className="information__description">{item}</span>
        </div>

        <div className="priority column">
          <span className="priority__title">Priority</span>
          <span className={`priority__description ${priority}`}>{priority}</span>
        </div>

        <div className="status column">
          <button
            className="status__button"
            onClick={() => onProgressButton(progress)}
          >
            {progress}
          </button>
        </div>
        <div className="progress column">
          {
  
            progress === "To Do" ? (
              <ProgressEmptyIcon />
            ) : progress === "In Progress" ? (
              <InProgressIcon />
            ) : (
              <FinishedProgressIcon />
            )
          }
        </div>
        <div className="action column">
          <div className="action__update" onClick={() => updateItem(id, item, priority)}>
            <UpdateIcon />

          </div>
          <div className="action__delete" onClick={() => deleteItem(id)}>
            <DeleteIcon />
          </div>

        </div>
      </div>
    </>
  );
};

TodoCard.propTypes = {
  todos: PropTypes.any.isRequired
}