import React,{useState} from "react";
import { data } from "./Data"
import box from "./images/illustration-box-desktop.svg"
import box2 from "./images/illustration-woman-online-desktop.svg"
// import button1 from "./images/icon-arrow-down.svg"
import Question from "./Question";
function App() {
  const [state, setState] = useState(data);
  return (
    <div className="container">
      <div className="img-container">
        <img src={box2} alt="" className="img1" />

        <img src={box} alt="" className="img2" />
     </div>
      <div className="accordion">
        <h1>FAQ</h1>
        {
          state.map((props) => {
            return <Question key={props.id} {...props} />
          })
        }
        
      </div>
    </div>
  );
}

export default App;
