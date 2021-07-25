import React from "react";
import RadioButtonGroup from "./lib/components/RadioButtonGroup";
function App() {
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
          hide={false}
          values={["apple","banana","strwabery"]}
        />
        <br/>
        <RadioButtonGroup
          onChange={handleChange}
          hide={false}
          values={["⚙️","🪔","💰"]}
        />
      </form>
    </div>
  );
}

export default App;
