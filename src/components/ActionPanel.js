import styles from "./ActionPanel.module.css";
import randomColorGen from "../utility/RandomColorGen";

const ActionPanel = (props) => {
  const buttonNumber = Math.floor(Math.random() * 3) + 1;
  const onClickHandler = (event) => {
    props.onClickCheck(event.target.innerText);
    // props.onClickCheck(event.target.value);
  };
  return (
    <div className={styles.main_container__action_panel}>
      {buttonNumber === 1 ? (
        <button onClick={onClickHandler}>{props.Answer}</button>
      ) : (
        <button onClick={onClickHandler}>{randomColorGen()}</button>
      )}
      {buttonNumber === 2 ? (
        <button onClick={onClickHandler}>{props.Answer}</button>
      ) : (
        <button onClick={onClickHandler}>{randomColorGen()}</button>
      )}
      {buttonNumber === 3 ? (
        <button onClick={onClickHandler}>{props.Answer}</button>
      ) : (
        <button onClick={onClickHandler}>{randomColorGen()}</button>
      )}
    </div>
  );
};

export default ActionPanel;
