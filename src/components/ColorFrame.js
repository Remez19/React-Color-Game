import styles from "./ColorFrame.module.css";
import React from "react";
const ColorFrame = (props) => {
  console.log(`answer: ${props.answer} first: ${props.first}`);
  return (
    <div className={styles.color_frame__main_container}>
      <div className={styles.color_frame__main_container_counter_correct}>
        {props.correctCounter}
      </div>
      {props.first && (
        <div
          className={styles.main_container__color_box}
          style={{ backgroundColor: props.frameColor }}
        ></div>
      )}
      {!props.first && (
        <div
          key={props.frameColor}
          className={styles.main_container__color_box_correct}
          style={{ backgroundColor: props.frameColor }}
        ></div>
      )}
      <div className={styles.color_frame__main_container_counter_worng}>
        {props.worngCounter}
      </div>
    </div>
  );
};

export default ColorFrame;
