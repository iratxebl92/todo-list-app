import { Button, TextField, Box, Modal, Typography } from "@mui/material";

import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../core/context/TodoContext";
import { useAddModal } from "../../TodoAddModal/hooks/useAddModal";

import "../styles/styles.css";

export const UpdateItem = () => {
  const {
    openUpdateModal,
    setOpenUpdateModal,
    updateId,
    updateInput: contextUpdateInput,
    updatePriority: contextUpdatePriority,
  } = useContext(TodoContext);

  const { error } = useAddModal();

 const [updateInput, setUpdateInput] = useState("");
 const [updatePriority, setUpdatePriority] = useState("");

 useEffect(() => {
   setUpdateInput(contextUpdateInput);
   setUpdatePriority(contextUpdatePriority);
   console.log(contextUpdateInput)
 }, [openUpdateModal, contextUpdateInput, contextUpdatePriority]);

  const selectPriority = ["high", "medium", "low"];

  console.log(updateId, updateInput, updatePriority, "PRUEBA");


  const handleItemUpdate = (event) => {
    setUpdateInput(event.target.value);
  };

  const handlePriorityUpdate = (newPriority) => {
    setUpdatePriority(newPriority);
  };

  const handleUpdateSubmit = () => {
    setUpdateTodo({
      updateId: updateId,
      updateInput: updateInput,
      updatePriority: updatePriority,
    });

    setOpenUpdateModal(false);
  };
  return (
    <>
      <Modal
        open={openUpdateModal}
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
            placeholder="Type your task here..."
            variant="outlined"
            id="text"
            type="text"
            required
            fullWidth
            autoFocus
            error={error.error}
            helperText={error.message}
            onChange={handleItemUpdate}
            value={updateInput}
            style={{ marginBottom: "10px" }}
          />
          <Box>
            <Box style={{ display: "flex", gap: "20px" }}>
              {selectPriority.map((priorityItem, index) => {
                return (
                  <Button
                    key={index}
                    style={{
                      borderRadius: "10px",
                      width: "120px",
                      fontWeight: "bold",
                    }}
                    variant="outlined"
                    onClick={() => handlePriorityUpdate(priorityItem)}
                    // className={`${priorityItem}-select priority `}
                    sx={{
                      border:
                        priorityItem === "high"
                          ? " 1px solid #f73446"
                          : priorityItem === "medium"
                          ? "1px solid #ffbd21"
                          : "1px solid #0ac947",
                      color:
                        priorityItem === "high"
                          ? "#f73446"
                          : priorityItem === "medium"
                          ? "#ffbd21"
                          : "#0ac947",
                    }}
                  >
                    {priorityItem}
                  </Button>
                );
              })}
            </Box>
          </Box>
          <Button
            variant="outlined"
            type="submit"
            sx={{ mt: 2 }}
            onClick={() =>handleUpdateSubmit}
          >
            Add
          </Button>
          <Button
            variant="outlined"
            sx={{ mt: 2 }}
            onClick={() => setOpenUpdateModal(false)}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </>
  );
};
