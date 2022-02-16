import React, { useState, useEffect } from "react";
import FormHelperText from "@mui/material/FormHelperText";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { writeNewTicket, readTicket, updateTicket } from "../firebaseApp";
import Loader from "./Loader";
import Notify from "./Notify";
import TicketItemFormTitle from "./TicketItemFormTitle";
import TicketItemFormSelect from "./TicketItemFormSelect";
import TicketItemFormDescription from "./TicketItemFormDescription";
import TicketItemFormBtn1 from "./TicketItemFormBtn1";
import TicketItemFormBtn2 from "./TicketItemFormBtn2";
import TicketItemFormBtn3 from "./TicketItemFormBtn3";
import { drawerWidth } from "./SideBar";
import toast from "react-hot-toast";
import styled from "@emotion/styled";

export default function TicketItemForm({ renderCondition }) {
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState({});
 
  useEffect(() => {
    if (ticket?.title && loading == true) {
      setLoading(false);
    }
  }, [ticket, loading]);

  useEffect(() => {
    if (renderCondition !== "new") {
      readTicket(renderCondition)
        .then((res) => {
          if (!res) {
            throw new Error("ERROR in readTicket: no such document!");
          }
          setTicket(res);
        })
        .catch((err) => {
          console.log("ERROR in readTicket: loading failed.", err);
          setTicket(null);
          setLoading(false);
        });
    }
    return () => {
      toast.remove();
    };
  }, []);

  const userData = useSelector((state) => state.user);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmitSave = async (data) => {
    const loadingToast = toast.loading("Создание заявки...");
    try {
      // throw new Error();
      await writeNewTicket(
        userData.id,
        userData.name,
        userData.avatar,
        data.ticketTitle,
        data.selectPriority,
        data.description,
        true
      );
    } catch {
      setTimeout(() => toast.remove(loadingToast), 1000);
      toast.error("Ошибка создания заявки");
      return;
    }
    toast.remove(loadingToast);
    toast.success("Заявка успешно создана");
    reset();
  };

  const onSubmitupdate = async (data) => {
    const loadingToast = toast.loading("Обновление заявки...");
    try {
      // throw new Error();
      await updateTicket(
        renderCondition,
        data.ticketTitle,
        data.selectPriority,
        data.description,
        true
      );
    } catch {
      setTimeout(() => toast.remove(loadingToast), 1000);
      toast.error("Ошибка обновления заявки");
      return;
    }
    toast.remove(loadingToast);
    toast.success("Заявка успешно обновлена");
    reset();
  };

  let formRender;
  if (renderCondition === "new") {
    formRender = (
      <>
        <TicketItemFormTitle
          name="ticketTitle"
          aria-describedby="helperTitle"
          control={control}
        />
        <FormHelperText1 id="helperTitle">
          {errors.ticketTitle?.message}
        </FormHelperText1>
        <TicketItemFormSelect
          name="selectPriority"
          aria-describedby="helperSelect"
          control={control}
        />
        <FormHelperText2 id="helperSelect">
          {errors.selectPriority?.message}
        </FormHelperText2>
        <TicketItemFormDescription name="description" control={control} />
        <FormHelperText3 id="helperSelect">
          {errors.description?.message}
        </FormHelperText3>
        <TicketItemFormBtn1
          type="submit"
          isValid={isValid}
          text={"Save details"}
        />
        <TicketItemFormBtn2 renderCondition={renderCondition} />
        <TicketItemFormBtn3 renderCondition={renderCondition} />
      </>
    );
  }

  if (renderCondition !== "new" && loading === true) {
    formRender = (
      <DivLoader>
        <Loader />
      </DivLoader>
    );
  }

  if (renderCondition !== "new" && ticket && loading === false) {
    formRender = (
      <>
        <TicketItemFormTitle
          name="ticketTitle"
          aria-describedby="helperTitle"
          control={control}
          value={ticket.title}
          disabled={!ticket.isOpen}
        />
        <FormHelperText1 id="helperTitle">
          {errors.ticketTitle?.message}
        </FormHelperText1>
        <TicketItemFormSelect
          name="selectPriority"
          aria-describedby="helperSelect"
          control={control}
          value={ticket.priority}
          disabled={!ticket.isOpen}
        />
        <FormHelperText2 id="helperSelect">
          {errors.selectPriority?.message}
        </FormHelperText2>
        <TicketItemFormDescription
          name="description"
          control={control}
          value={ticket.decr}
          disabled={!ticket.isOpen}
        />
        <FormHelperText3 id="helperSelect">
          {errors.description?.message}
        </FormHelperText3>
        <TicketItemFormBtn1
          type="submit"
          isValid={isValid}
          text={"Update"}
          disabled={userData.id != ticket.user.userId || !ticket.isOpen}
        />
        <TicketItemFormBtn2
          renderCondition={renderCondition}
          disabled={userData.id != ticket.user.userId || !ticket.isOpen}
        />
        <TicketItemFormBtn3
          renderCondition={renderCondition}
          disabled={userData.id != ticket.user.userId || !ticket.isOpen}
        />
      </>
    );
  }

  if (
    !renderCondition ||
    (renderCondition !== "new" && !ticket && loading === false)
  ) {
    return <Navigate to={"/tickets"} />;
  }

  return (
    <DivCont>
      <Notify />
      <Form
        onSubmit={
          renderCondition === "new"
            ? handleSubmit(onSubmitSave)
            : handleSubmit(onSubmitupdate)
        }
      >
        <Label>
          {renderCondition === "new"
            ? "New task"
            : ticket?.isOpen
            ? "Editing"
            : "Ticket closed"}
        </Label>
        {formRender}
      </Form>
    </DivCont>
  );
}

const DivCont = styled.div`
  position: absolute;
  width: 1122px;
  top: 128px;
  height: 372px;
  margin-left: 30px;
`;

const DivLoader = styled.div`
  position: absolute;
  left: calc(50% - 35px);
  top: calc(50% - 35px);
`;

const Form = styled.form`
  border: 1px solid #dfe0eb;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: 32px;
  left: 32px;
  font-weight: bold;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.4px;
`;

const FormHelperText1 = styled(FormHelperText)`
  color: red;
  position: absolute;
  top: 153px;
  left: 34px;
`;
const FormHelperText2 = styled(FormHelperText)`
  color: red;
  position: absolute;
  top: 153px;
  left: 394px;
`;
const FormHelperText3 = styled(FormHelperText)`
  color: red;
  position: absolute;
  top: 240px;
  left: 34px;
`;
