import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { closeTicket } from "../firebaseApp";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function TicketItemFormBtn2({ renderCondition, disabled }) {
  if (renderCondition == "new") {
    return null;
  }
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  
  const closeHandler = async () => {
    const loadingToast = toast.loading("Закрытие тикета...");
    try {
      // throw new Error();
      await closeTicket(renderCondition);
    } catch {
      setTimeout(() => toast.remove(loadingToast), 1000);
      toast.error("Ошибка закрытия тикета");
      return;
    }
    toast.remove(loadingToast);
    toast.success("Тикет успешно завершён");
    setTimeout(() => goBack(), 1200);
  };

  return (
    <StyledButton
      variant="contained"
      disabled={disabled ? disabled : false}
      onClick={closeHandler}
    >
      Complete
    </StyledButton>
  );
}



const StyledButton = styled(Button)`
  position: absolute;
  top: 269px;
  left: 188px;
  height: 40px;
  width: 124px;
  text-transform: none;
  background-color: #f2cf42;
  font-weight: 600;
  font-size: 14px;
  &:hover {
    background-color: #9f8930;
  }
`;
