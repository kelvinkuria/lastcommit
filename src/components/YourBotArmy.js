import React from "react";
import BotCard from "./BotCard"; 

function YourBotArmy({
  botArmy, 
  removeBot, 
  dischargeBot  
}) {

  function handleDischargeBot(bot) {
    dischargeBot(bot);
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">  
          {botArmy.map(bot => (
            <BotCard
              bot={bot}
              botCard={removeBot}
              handleDischargeBot={handleDischargeBot} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
