import styles from "./App.module.css";
import ColorFrame from "./components/ColorFrame";
import ActionPanel from "./components/ActionPanel";
import { useEffect, useState } from "react";
import randomColorGen from "./utility/RandomColorGen";
import React from "react";
import Header from "./components/Header";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [answer, setAnswer] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [correctCounter, setCorrectCounter] = useState(0);
  const [worngCounter, setWorngCounter] = useState(0);
  const fadeoutAnimWorng = `
  @keyframes fadeoutWorng {
    0% {
      background-color: rgb(255, 61, 61);
    }
    100% {
      background-color: rgb(255, 255, 255);
    }
  }
`;
  const fadeoutAnimCorrect = `
@keyframes fadeoutCorrect {
  0% {
    background-color: rgb(0, 171, 23);
  }
  100% {
    background-color: rgb(255, 255, 255);
  }
`;

  useEffect(() => {
    setColorValue(randomColorGen());
  }, []);
  console.log(colorValue);
  const onValidateAnswerHandler = (userAnswer) => {
    setFirstLoad(false);
    if (userAnswer.localeCompare(colorValue) === 0) {
      setAnswer(true);
      setCorrectCounter((prevState) => {
        return prevState + 1;
      });
    } else {
      setAnswer(false);
      setWorngCounter((prevState) => {
        return worngCounter + 1;
      });
    }
    setColorValue(randomColorGen());
  };
  return (
    <React.Fragment>
      <Header />
      <style children={answer ? fadeoutAnimCorrect : fadeoutAnimWorng} />
      <div
        className={styles.main_container}
        key={colorValue}
        style={
          !firstLoad
            ? {
                animationName: answer ? "fadeoutCorrect" : "fadeoutWorng",
                animationDuration: "1.4s",
                animationDelay: "0",
                animationTimingFunction: "ease-out",
              }
            : null
        }
      >
        <ColorFrame
          frameColor={colorValue}
          answer={answer}
          first={firstLoad}
          correctCounter={correctCounter}
          worngCounter={worngCounter}
        />
        <ActionPanel
          Answer={colorValue}
          onClickCheck={onValidateAnswerHandler}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
