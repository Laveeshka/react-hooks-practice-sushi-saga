import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

//think it through Lavee
//render 4 sushis at a time, hmm offset the array by 4 everytime
//non-destructive method of modifying the sushis array
//slice method
//use state to update the moving start index
function SushiContainer({ sushis, onEatPlate }) {
  const [startIndex, setStartIndex] = useState(0);
  const offset = 4;

  function showNextSushis(){
    setStartIndex((prevState) => prevState + offset);
    console.log(startIndex);
  }

  const sushiComponents = sushis
    .slice(startIndex, startIndex + offset)
    .map((sushi) => <Sushi key={sushi.id} sushi={sushi} onEatPlate={onEatPlate}/>);  

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton showNextSushis={showNextSushis}/>
    </div>
  );
}

export default SushiContainer;
