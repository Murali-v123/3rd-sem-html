import "./App.css";
import Component from "./component/component";
import Form from "./component/form";
import Ordered from "./component/Ordered"


function App() {
  return (
    <>
      <Form  text={"Hello this is data"} value={34} arr={[1,2,3,4]}/>
      <Component  />
      <Ordered />
    </>
  );
}

export default App;
