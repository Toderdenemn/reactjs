import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "react-awesome-button/dist/styles.css";
import { AwesomeButton } from "react-awesome-button";

function TextControlsExample() {
  return (
    <>
      <div>
        <Card style={{ width: "30rem", marginTop: "30px" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Улс төр</Card.Title>
            <Card.Text>
              Н.ТАВИНБЭХ: НИЙСЛЭЛИЙН АГААРЫН БОХИРДОЛД ШАХМАЛ ТҮЛШ, ДЦС-УУДЫН
              УТААНЫ ҮЗҮҮЛЭХ НӨЛӨӨЛӨЛ ӨМНӨХ ЖИЛҮҮДЭЭС ИХСЭЭГҮЙ
            </Card.Text>
            <AwesomeButton type="anchor">Anchor</AwesomeButton>
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
            <Button variant="primary">Дэлгэрэнгүй</Button>
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
            <Button variant="primary">Дэлгэрэнгүй</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default TextControlsExample;
