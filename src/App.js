import "./App.css";

import { Title } from "./Components/Title/Title.jsx";
import { LeftImageAndDescription } from "./Components/LeftImageAndDescription/LeftImageAndDescription.jsx";
import { RightImageAndDescription } from "./Components/RightImageAndDescrption/RightImageAndDescription.jsx";

function App() {
  return (
    <div className="bodyDiv">
      <Title title="Framer Scroll Animation" />
      <LeftImageAndDescription />
      <RightImageAndDescription />
      <LeftImageAndDescription />
      <RightImageAndDescription />
      <LeftImageAndDescription />
      <RightImageAndDescription />
      <LeftImageAndDescription />
      <RightImageAndDescription />
    </div>
  );
}

export default App;
