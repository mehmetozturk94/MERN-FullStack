import React from "react";
import { Button, Modal } from "react-bootstrap";

const RemoveModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default RemoveModal;
