import Card from "react-bootstrap/Card";
import { SizesExampleRead, SizesExampleDelete, SizesExample } from "./button";

export function BasicExample() {
  return (
    <>
      <Card style={{ width: "100%", marginTop: "2rem" }}>
        <Card.Body>
          <Card.Title>Мэдээ #1</Card.Title>
          <Card.Text>
            Алслагдмал зам, талбай, замын нуухны цэвэрлэгээг бүрэн, чанартай
            хийхийг үүрэг болгов
          </Card.Text>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <SizesExampleRead />
            <SizesExample />
            <SizesExampleDelete />
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: "100%", marginTop: "2rem" }}>
        <Card.Body>
          <Card.Title>Мэдээ #2</Card.Title>
          <Card.Text>
            УБТЗ-ын ТЗБА-ны дарга С.Батдөлийг тансаг зэрэглэлийн хаусандаа
            байхад нь баривчилжээ
          </Card.Text>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <SizesExampleRead />
            <SizesExample />
            <SizesExampleDelete />
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "100%", marginTop: "2rem" }}>
        <Card.Body>
          <Card.Title>Мэдээ #3</Card.Title>
          <Card.Text>
            Сүхбаатар аймагт сүрьеэгийн вакциныг галзуу өвчнөөс сэргийлэх
            вакцинтай андуурч 11 хүнд тарьжээ
          </Card.Text>
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <SizesExampleRead />
              <SizesExample />
              <SizesExampleDelete />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
