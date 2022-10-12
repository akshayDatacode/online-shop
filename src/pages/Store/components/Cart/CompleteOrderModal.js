import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const CompleteOrderModal = ({ open, toggle, onSubmit, total }) => {
  const [email, setEmail] = useState();

  return (
    <>
      <Modal isOpen={open} toggle={toggle} className="delete-tutorial-modal">
        <ModalHeader toggle={toggle} className="modal-header">
          Confirm Your Order
        </ModalHeader>
        <ModalBody>
          <div className="p-4 border">
            <small>Please provide your email to confirm your order</small>
            <h6>Total Amount</h6>
            <h1 className="text-success">{total} <i className="fal fa-rupee-sign" /></h1>
            <div className="form-group my-3">
              <label>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                className="form-control"
                placeholder="email@email.com"
              />
            </div>
            <button className="btn btn-primary" onClick={() => onSubmit(email)}>
              Confirm Order
            </button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CompleteOrderModal;
