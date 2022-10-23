import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  //set state for sushis list
  const [sushis, setSushis] = useState([]);

  //fetch sushis list and assign to state
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(sushisData => {
        setSushis(sushisData);
      })
  }, []);

  return (
    <div className="app">
      <SushiContainer sushis={sushis}/>
      <Table />
    </div>
  );
}

export default App;
