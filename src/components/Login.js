import React from "react";
import styles from "./Login.module.css";
import ButtonAuth from "./ButtonAuth";

export default function Login() {
  //TODO картинку или что-то посимпатичнее на фон
  return (
    <div className={styles.container}>
        <ButtonAuth />
    </div>
  );
}
