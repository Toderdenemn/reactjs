function TextControlsExample() {
    return (
      <>
        <div></div>
        <div>
          <Card style={{ width: "30rem", marginTop: "30px" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Улс төр</Card.Title>
              <Card.Text>
                Н.ТАВИНБЭХ: НИЙСЛЭЛИЙН АГААРЫН БОХИРДОЛД ШАХМАЛ ТҮЛШ, ДЦС-УУДЫН
                УТААНЫ ҮЗҮҮЛЭХ НӨЛӨӨЛӨЛ ӨМНӨХ ЖИЛҮҮДЭЭС ИХСЭЭГҮЙ
              </Card.Text>
              <Button variant="primary">Засах</Button>
              <Button variant="danger" style={{ marginLeft: "20px" }}>
                Устгах
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "30rem", marginTop: "30px" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Нийгэм</Card.Title>
              <Card.Text>
                С.АМАРСАЙХАН: ЦАГ АГААРААС ШАЛТГААЛАН МАЛЫН ӨВС ТЭЖЭЭЛИЙН ХЭРЭГЛЭЭ
                ӨНГӨРСӨН ЖИЛИЙНХЭЭС 2-4 ДАХИН ӨСЛӨӨ
              </Card.Text>
  
              <Button variant="primary">Засах</Button>
  
              <Button variant="danger" style={{ marginLeft: "20px" }}>
                Устгах
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "30rem", marginTop: "30px" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Технологи</Card.Title>
              <Card.Text>
                САМСУНГ “ХААЛГАН ДЭЭРЭЭ ЗУРАГТТАЙ” ХӨРГӨГЧ ТАНИЛЦУУЛЖЭЭ
              </Card.Text>
              <Button variant="primary" onClick={Example()}>
                Засах
              </Button>
              <Button variant="danger" style={{ marginLeft: "20px" }}>
                Устгах
              </Button>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
  
  export default TextControlsExample;
  
  function Example() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  