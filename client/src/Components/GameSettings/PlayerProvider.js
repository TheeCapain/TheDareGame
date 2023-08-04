import React, { createContext, useContext, useState } from "react";

const PlayersContext = createContext();

export function usePlayers() {
  return useContext(PlayersContext);
}

export function PlayersProvider({ children }) {
  const [players, setPlayers] = useState([]);

  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayersContext.Provider>
  );
}