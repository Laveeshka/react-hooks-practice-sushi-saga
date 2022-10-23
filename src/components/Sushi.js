import React, {useState} from "react";

function Sushi({ sushi, onEatPlate, budget }) {
  //state to check whether the sushi has been eaten
  const [isEaten, setIsEaten] = useState(false); 

  //destructure sushi
  const {id, name, img_url, price, created_at} = sushi;
  console.log("print me out", sushi);

  //set isEaten to true for the clicked plate
  function handlePlateClick(){
    if(budget >= price){
      setIsEaten(!isEaten);
      onEatPlate(sushi);
    }
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handlePlateClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
