import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";
import styled from "@emotion/styled";

export default function TicketItemFormSelect({ control, name, ...props }) {
  return (
    <>
      <Controller
        defaultValue={props.value ? props.value : ""}
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <StyledSelect
              disabled={props.disabled}
              required
              {...field}
              {...control.register(name, {
                required: "Выберите приоритет",
              })}
            >
              <MenuItem value={"low"}>low</MenuItem>
              <MenuItem value={"normal"}>normal</MenuItem>
              <MenuItem value={"high"}>high</MenuItem>
            </StyledSelect>
          </>
        )}
      />
    </>
  );
}

const StyledSelect = styled(Select)`
  position: absolute;
  top: 97px;
  left: 392px;
  height: 56px;
  width: 344px;
`;

