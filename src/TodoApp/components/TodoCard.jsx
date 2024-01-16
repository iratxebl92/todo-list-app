import { Box, Button, CircularProgress, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import { UseTodoApp } from "../hooks/UseTodoApp";
import { useContext, useEffect } from "react";
import { TodoContext } from "../../core/context/TodoContext";

export const TodoCard = ({ todos }) => {

  const { id, item, priority } = todos;
  const {onProgressButton, progress} = UseTodoApp()
   const {deleteItem, todoState} = useContext(TodoContext)


  useEffect(() => {

    
  }, [todoState])

  return (
    <Box
      className="todo-card"
      sx={{
        display: "flex",
        border: "2px solid black",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      {/* <p>{item}</p>
        <p>{priority}</p> */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body1" gutterBottom>
          Task
        </Typography>
        <Typography variant="body3" gutterBottom>
          {item}
        </Typography>
      </Box>

      <Box>
        <Typography variant="body1" gutterBottom>
          Priority
        </Typography>
        <Typography variant="body3" gutterBottom>
          {priority}
        </Typography>
      </Box>
      <Button onClick={() => onProgressButton(progress)}> {progress } </Button>

        <Box>
          {/* <CircularProgress sx={{color: 'rgba(128, 128, 128, 0.2)'}} className="circular-progress" variant="determinate" value={100} /> */}
          {/* La de arriba es para cuando esté por hacer la tarea */}
          <CircularProgress
          sx={ progress === 'To Do' ? {color: 'rgba(128, 128, 128, 0.2)'} : ''}
            className="circular-progress"
            variant="determinate"
            value={progress === 'In Progress' ? 50 : progress === 'Done' || 'To Do' ? 100 : 0}
          />
        </Box>
        <Box>
          <NoteAltOutlinedIcon  fontSize="large" />
          <DeleteOutlineOutlinedIcon 
            fontSize="large" 
            sx={{color: 'red'}} 
             onClick={() => deleteItem(id)}
            />
          {/* small / medium /large */}

        </Box>
   
    </Box>
  );
};
