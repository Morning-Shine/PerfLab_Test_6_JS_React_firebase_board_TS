import React from "react";
import { Button, MenuItem } from "@mui/material";
import TicketItemFormPopup from "./TicketItemFormPopup";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { deleteTicket } from "../firebaseApp";
import toast from "react-hot-toast";

export default function TicketItemFormBtn3({ renderCondition, ...props }) {
  const navigate = useNavigate();

  const [visible, setVisible] = React.useState(false);

  const btnTxt = renderCondition == "new" ? "Cancel" : "Delete";
  const goBack = () => navigate(-1);

  const changePopupVisible = () => {
    setVisible(!visible);
  };

  const onDeleteHandler = async () => {
    setVisible(false);
    const loadingToast = toast.loading("Удаление тикета...");
    try {
      // throw new Error();
      await deleteTicket(renderCondition);
    } catch {
      setTimeout(() => toast.remove(loadingToast), 1000);
      toast.error("Ошибка удаления");
      return;
    }
    toast.remove(loadingToast);
    toast.success("Удаление тикета успешно завершено");
    setTimeout(() => goBack(), 1200);
  };

  return (
    <>
      <StyledButton
        disabled={props.disabled ? props.disabled : false}
        variant="contained"
        onClick={renderCondition == "new" ? goBack : changePopupVisible}
      >
        {btnTxt}
      </StyledButton>
      {renderCondition != "new" ? (
        <TicketItemFormPopup
          visible={visible}
          changePopupVisible={changePopupVisible}
          onDeleteHandler={onDeleteHandler}
        />
      ) : null}
    </>
  );
}

const StyledButton = styled(Button)`
  position: absolute;
  left: 612px;
  top: 269px;
  height: 40px;
  width: 124px;
  text-transform: none;
  background-color: #eb6e6e;
  font-weight: 600;
  font-size: 14px;
  &:hover {
    background-color: #994748;
  }
`;
