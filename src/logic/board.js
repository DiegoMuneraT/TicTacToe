import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
  // recorrer todas las combinaciones
  // si hay 3 en linea, retornar el ganador
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // si no hay ganador, retornar null
  return null;
};

export const checkEndGame = (newBoard) => {
  // revisamos si no hay espacios vacios
  // si hay quiere decir que el juego no ha terminado
  return newBoard.every((square) => square !== null);
};