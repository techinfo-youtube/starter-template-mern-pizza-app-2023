import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container style={{ marginTop: "200px" }}>
        <h4 className="text-center"> Welcome To TechInfo YT Channel</h4>
        <h1 className="text-center text-white bg-warning p-2 mt-4">
          Online Pizza Project With Mern Stack
        </h1>
        <h2 className="m-4 text-center">
          follow on Instagram :
          <strong style={{ color: "red" }}> @technical_update</strong>
        </h2>
        <h1>
          Like Video, comment your queries and dont forget to subscribe channel
        </h1>
      </Container>
    </>
  );
}

export default App;
