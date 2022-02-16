import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import styled from "@emotion/styled";

export default function TicketItemFormDescription({ control, name, ...props }) {
  const [formValue, setFormValue] = useState(props.value);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={""}
      render={({ field }) => (
        <StyledTextField
          label="Description"
          {...field}
          {...control.register(name, {
            maxLength: {
              value: 100,
              message: "Ограничение на ввод 100 символов",
            },
          })}
          value={props.value ? formValue : undefined}
          onChange={e => setFormValue(e.target.value)}
          disabled={props.disabled}
        />
      )}
    />
  );
}

const StyledTextField = styled(TextField)`
  position: absolute;
  top: 183px;
  left: 32px;
  height: 56px;
  width: 704px;
`;
