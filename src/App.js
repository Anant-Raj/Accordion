import "./styles.css";
import Accordian from "./Components/Accordian";
import Content from "./Components/Content";
import AccordianItem from "./Components/AccordianItem";

export default function App() {
  return (
    <div className="App">
      <Accordian>
        <AccordianItem
          title={"Files"}
          content={<Content text={"files here"} />}
        ></AccordianItem>
        <AccordianItem
          title={"Shared with you"}
          content={<Content text={"Shared with you here"} />}
        ></AccordianItem>
      </Accordian>
    </div>
  );
}
