import {
  Button,
  TextField,
  Box,
  Modal,
  ListItem,
  List,
  Typography,
} from "@mui/material";

import { useContext } from "react";
import { TodoContext } from "../../core/context/TodoContext";
import { useAddModal } from "../hooks/UseAddModal";

import "../styles/styles.css";

export const AddItem = () => {
  const { openModal, setOpenModal, addTodoItem } = useContext(TodoContext);

  const {
    item,
    priority,
    error,
    handleItemChange,
    handlePriorityChange,
    onSubmit,
  } = useAddModal();

  const selectPriority = ["high", "medium", "low"];

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
          <Box>
            <List style={{ display: "flex" }}>
              {selectPriority.map((priorityItem, index) => {
                return (
                  <ListItem
                    key={index}
                    style={{
                      borderRadius: "10px",
                      width: "90px",
                      marginRight: "30px",
                    }}
                    onClick={() => handlePriorityChange(priorityItem)}
                    className={`${priorityItem}-select`}
                  >
                    {priorityItem}
                  </ListItem>
                );
              })}
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
