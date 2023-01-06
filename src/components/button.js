import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export function SizesExampleRead() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div style={{ marginRight: "0.5rem" }}>
        <Button
          variant="secondary"
          size="md"
          style={{ width: "8rem" }}
          onClick={handleShow}
        >
          Унших
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Алслагдмал зам, талбай, замын нуухны цэвэрлэгээг бүрэн, чанартай
            хийхийг үүрэг болгов.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Хот, нийтийн аж ахуйн үйл ажиллагаа эрхэлдэг байгууллагуудын шуурхай
          зөвлөгөөн өнөөдөр боллоо. Улаанбаатар хотын Ерөнхий менежер бөгөөд
          Захирагчийн ажлын алба (УБЗАА)-ны дарга М.Баяраа шуурхай зөвлөгөөнийг
          удирдаж, нийслэлийн хэмжээнд халтиргаа гулгааг арилгахад авч
          хэрэгжүүлж буй арга хэмжээ, цэвэрлэгээ, үйлчилгээнд тавих хяналт
          зэргийн талаар холбогдох байгууллагуудын удирдлага мэдээлэл өгөв.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Хаах
          </Button>
        </Modal.Footer>
      </Modal>
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
