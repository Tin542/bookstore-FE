import { Modal } from "antd";
import React, { useState } from "react";

const PopUpConfirm = () => {
  const [open, setOpen] = useState(false);

  const hideModal = () => {
    setOpen(false);
  };
  return (
    <Modal
      title="Confirm"
      open={open}
      onOk={hideModal}
      onCancel={hideModal}
      okText="Yes"
      cancelText="No">
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
    </Modal>
  );
};

export default PopUpConfirm;
