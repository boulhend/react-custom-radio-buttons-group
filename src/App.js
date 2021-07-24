import React from "react";
import RadioButtonGroup from "./lib/components/RadioButtonGroup";

function App() {
  
  const style = {
    border: "2px",
    borderStyle: "solid",
    borderColor: "black",
    color: "black",
    padding: "5px",
    display: "inline-block",
    marginRight: "5px",
    cursor: "pointer",
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    console.log(e.target)
  };
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <RadioButtonGroup
          onChange={handleChange}
          hide={true}
          values={["apple","banana","strwabery"]}
          radioButtonStyle={style}
          activeButtonStyle={{backgroundColor:"blue",color:"white"}}
          groupStyle={{margin:"20px"}}
        />
        <RadioButtonGroup
          onChange={handleChange}
          hide={true}
          values={["mercedes","bmw","volkdwagen"]}
          radioButtonStyle={style}
          activeButtonStyle={{backgroundColor:"blue",color:"white"}}
        />
        <button type="submit">Click</button>
      </form>
    </div>
  );
}

export default App;
