// @ts-ignore
import React from "react";

import "./styles.css";
import Button from "./components/Button/Button";

const GameBoard = () => {
  return (
    <>
      Hello wolrd
      <Button
        onClick={() => {}}
        message={""}
        type={"secondary"}
        isActive={false}
      />
    </>
  );
};

GameBoard.displayName = "GameBoard";
export default GameBoard;
