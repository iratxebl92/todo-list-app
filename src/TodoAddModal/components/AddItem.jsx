import {
  Button,
  TextField,
  Box,
  Modal,
  ListItem,
  List,
  Typography
} from "@mui/material";

import { useContext } from "react";
import { TodoContext } from "../../core/context/TodoContext";
import { useAddModal } from "../hooks/UseAddModal";


export const AddItem = () => {


  const { openModal, setOpenModal, addTodoItem } = useContext(TodoContext);

  const {item, priority, error, handleItemChange, handlePriorityChange,onSubmit} = useAddModal()

  return (
    <>
      <Modal
        open={openModal}
        className="modal-container"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          autoComplete="off"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            backgroundColor: "white",
            padding: "50px",
          }}
        >
          <Typography>Add Task</Typography>
          <TextField
            label="Tarea"
            variant="outlined"
            id="text"
            type="text"
            required
            fullWidth
            error={error.error}
            helperText={error.message}
            onChange={handleItemChange}
            value={item}
            style={{ marginBottom: "10px" }}
          />
          <Box >
            <List style={{display: 'flex'}}>
              <ListItem 
                style={{border: '1px solid #f73446', borderRadius: '10px', backgroundColor: 'white', color: '#f73446', width: '90px', marginRight: '30px' }}
                onClick={ ()=> handlePriorityChange('High')}
                value={{priority}}
              >
                High
              </ListItem>
              <ListItem 
                style={{border: '1px solid #ffbd21', borderRadius: '10px', backgroundColor: 'white', color: '#ffbd21',  width: '90px',marginRight: '30px'}}
                onClick={ ()=> handlePriorityChange('Medium')}
                value={{priority}}
              >
                Medium
              </ListItem>
              <ListItem 
                style={{border: '1px solid #0ac947', borderRadius: '10px', backgroundColor: 'white', color: '#0ac947',  width: '90px'}}
                onClick={ ()=> handlePriorityChange('Low')}
                value={{priority}}
              >
                Low
              </ListItem>
            </List>
          </Box>
          <Button
            variant="outlined"
            type="submit"
            sx={{ mt: 2 }}
            onClick={() => onSubmit(item, priority)}
          >
            Submit
          </Button>
          <Button
            variant="outlined"
            sx={{ mt: 2 }}
            onClick={() => setOpenModal(false)}
          >
            Cancelar
          </Button>
        </Box>
      </Modal>
    </>
  );
};
