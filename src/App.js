import styles from "./App.module.css";
import ColorFrame from "./components/ColorFrame";
import ActionPanel from "./components/ActionPanel";
import { useEffect, useState } from "react";
import randomColorGen from "./utility/RandomColorGen";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [answer, setAnswer] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    setColorValue(randomColorGen());
  }, []);
  console.log(colorValue);
  const onValidateAnswerHandler = (userAnswer) => {
    setFirstLoad(false);
    if (userAnswer.localeCompare(colorValue) === 0) {
      setAnswer(true);
      setColorValue(randomColorGen());
    } else {
      setAnswer(false);
    }
  };
  return (
    <div className={styles.main_container}>
      <ColorFrame frameColor={colorValue} answer={answer} first={firstLoad} />
      <ActionPanel Answer={colorValue} onClickCheck={onValidateAnswerHandler} />
    </div>
  );
}

export default App;
