import { Button, Box, Modal, Typography } from "@mui/material";

import "../styles/styles.css";
import { useContext } from "react";
import { TodoContext } from "../../core/context/TodoContext";

export const DeleteItem = ({ id }) => {
  const { openDeleteModal, setOpenDeleteModal, deleteItem } =
    useContext(TodoContext);

  const onHandleDelete = () => {
    deleteItem(id);
    setOpenDeleteModal(false);
  };

  return (
    <>
      <Modal
        open={openDeleteModal}
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
          <Typography> Are you sure you want to delete this task?</Typography>
          <Box>
            <Button onClick={onHandleDelete}>Delete</Button>
            <Button onClick={() => setOpenDeleteModal(false)}>Cancel</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
