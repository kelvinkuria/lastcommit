import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, addBot, dischargeBot}) {

  function handleDischargeBot(bot) {
    dischargeBot(bot);
  }

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard 
            bot={bot}
            botCard={addBot}
            handleDischargeBot={handleDischargeBot}  
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;