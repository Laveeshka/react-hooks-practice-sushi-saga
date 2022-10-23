import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  //set state for sushis list, plates list
  const [sushis, setSushis] = useState([]);
  const [plates, setPlates] = useState([]);

  //fetch sushis list and assign to state
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(sushisData => {
        setSushis(sushisData);
      })
  }, []);

  function addSushiToTable(sushi){
    const updatedPlates = [...plates, sushi];
    setPlates(updatedPlates);
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatPlate={addSushiToTable}/>
      <Table plates={plates}/>
    </div>
  );
}

export default App;
