import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export function SizesExampleRead() {
  return (
    <>
      <div style={{ marginRight: "0.5rem" }}>
        <Button variant="secondary" size="md" style={{ width: "8rem" }}>
          Унших
        </Button>
      </div>
    </>
  );
}
export function SizesExample() {
  return (
    <>
      <div style={{ marginRight: "0.5rem" }}>
        <Button variant="secondary" size="md" style={{ width: "8rem" }}>
          Засах
        </Button>
      </div>
    </>
  );
}

export function SizesExampleDelete() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style={{ marginRight: "0.5rem" }}>
        <Button
          variant="danger"
          size="md"
          style={{ width: "8rem" }}
          onClick={handleShow}
        >
          Устгах
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Устгахдаа итгэлтэй байна уу?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Эргүү мал минь устгачихвал тгээд дахиад бичих боломжгүй шдээ..
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Үгүй
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Тийм
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
