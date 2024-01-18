import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "../../core/share/CustomButton/CustomButton";
import { TodoTask } from "../components/TodoTask";
import { TodoContext } from "../../core/context/TodoContext";
import { AddItem } from "../../TodoAddModal/components/AddItem";
import '../styles/styles.css'


export const TodoApp = () => {
  const { openModal, setOpenModal } = useContext(TodoContext);

  return (
    
    <>
  
      {openModal ? <AddItem /> : ""}
      <Box
        className="todo-app-container"
        style={{ width: "720px", maxWidth: "100%", margin: "0 auto" }}
      >
        <Box style={{height: '100%'}}>
        <Typography className="todo-app-title" variant="h3" gutterBottom>
        TODO LIST
      </Typography>
         
          <CustomButton
            value="Add Task"
            className="todo-app-add-button"
            onClick={() => setOpenModal(true)}
            style={{backgroundColor: '#646ff0', color: 'white'}}
          />
          <TodoTask />
        </Box>
      </Box>
    </>
  );
};
