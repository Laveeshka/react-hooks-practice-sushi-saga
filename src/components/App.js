import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import SushiWalletForm from "./SushiWalletForm";

const API = "http://localhost:3001/sushis";

function App() {
  //set state for sushis list, plates list, budget
  const [sushis, setSushis] = useState([]);
  const [plates, setPlates] = useState([]);
  const [budget, setBudget] = useState(50);

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
    setBudget(prevBudget => prevBudget - sushi.price);
  }

  function addToBudget(topUpValue){
    setBudget(prevBudget => prevBudget + topUpValue);
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatPlate={addSushiToTable} budget={budget}/>
      <Table plates={plates} budget={budget}/>
      <SushiWalletForm addToBudget={addToBudget}/>
    </div>
  );
}

export default App;
