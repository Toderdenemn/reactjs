import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { NavBar } from "./components/NavBar";
import { BasicExample } from "./components/card";

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <BasicExample />
      </Container>
    </>
  );
}
export default App;
