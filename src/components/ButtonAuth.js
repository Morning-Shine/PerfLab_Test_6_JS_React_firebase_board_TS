import React from "react";
// import styles from "./ButtonAuth.module.css";
import google_logo from "../assets/img/google.png";
import { app } from "../firebaseApp";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import styled from "@emotion/styled";

export default function ButtonAuth() {
  const dispatch = useDispatch();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(
          setUser({
            name: result.user.displayName,
            id: result.user.uid,
            avatar: result.user.photoURL,
          })
        );
      })
      .catch((error) => {
        console.log("ошибка!", error); //TODO
      });
  };

  return (
    <StyledButton variant="contained" onClick={handleLogin}>
      <GoogleIcon />
      <P>Войти с помощью Google</P>
    </StyledButton>
  );
  // <button className={styles.btn} onClick={handleLogin}>
  //   <img className={styles.img} src={google_logo} alt="google_logo" />
  //   <p className={styles.text}>Войти с помощью Google</p>
  // </button>
}

const StyledButton = styled(Button)`
  background: #d3b392;
  height: 70px;
  position: relative;
  right: 50px;
  top: calc(50vh - 35px);
  text-transform: none;
  font-size: 10px;
  &:hover {
    background: #cea482;
  }
`;
const P = styled.p`
  padding-left: 10px;
  font-size: 1.5em;
`;
