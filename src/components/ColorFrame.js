import styles from "./ColorFrame.module.css";
import React from "react";
const ColorFrame = (props) => {
  console.log(`answer: ${props.answer} first: ${props.first}`);
  return (
    <React.Fragment>
      {!props.answer && props.first && (
        <div
          className={styles.main_container__color_box}
          style={{ backgroundColor: props.frameColor }}
        ></div>
      )}
      {!props.answer && !props.first && (
        <div
          className={styles.main_container__color_box_worng}
          style={{ backgroundColor: props.frameColor }}
        ></div>
      )}
      {props.answer && !props.first && (
        <div
          className={styles.main_container__color_box_correct}
          style={{ backgroundColor: props.frameColor }}
        ></div>
      )}
    </React.Fragment>
  );
};

export default ColorFrame;
