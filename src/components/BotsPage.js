import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/bots")
      .then((response) => response.json())
      .then((data) => {
        setBots(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function addBotsList(botData) {
    if (!botArmy.find((bot) => bot.id === botData.id)) {
      setBotArmy([...botArmy, botData]);
    }
  }

  function deletePermanently(botData) {
    if (botArmy.find((bot) => bot.id === botData.id)) {
      const filterBotArmy = botArmy.filter((bot) => bot.id !== botData.id);
      setBotArmy(filterBotArmy);

      fetch(`http://localhost:3001/bots/${botData.id}`, {
        method: "DELETE",
      })
        .then(() => {
          const filterBots = bots.filter((bot) => bot.id !== botData.id);
          setBots(filterBots);
        })
        .catch((error) => {
          console.error("Error deleting bot:", error);
        });
    }
  }

  function dischargeBot(botData) {
    const botList = botArmy.filter((bot) => bot.id !== botData.id);
    setBotArmy(botList);
  }

  return (
    <div>
      <YourBotArmy
        botArmy={botArmy}
        removeBot={dischargeBot}
        dischargeBot={deletePermanently}
      />
      <BotCollection
        bots={bots}
        addBot={addBotsList}
        dischargeBot={deletePermanently}
      />
    </div>
  );
}

export default BotsPage;

