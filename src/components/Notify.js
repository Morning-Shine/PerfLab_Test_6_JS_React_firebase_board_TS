import React from "react";
import toast, { Toaster, ToastBar } from "react-hot-toast";
import { useSelector } from "react-redux";

export default function Notify() {
  const themeProp = useSelector(state => state.theme.currentTheme);

  let bgrColor;
  switch (themeProp) {
    case "light":
      bgrColor = "#DDE2FF";
      break;
    case "dark":
      bgrColor = "#363740";
      break;
  }

  return (
    <Toaster
      containerStyle={{
        position: "absolute",
        height: "100%",
        width: "100%",
        marginLeft: "-10px",
        marginTop: "-5px",
      }}
      toastOptions={{
        style: {
          backgroundColor: bgrColor,
        },
        success: {
          style: {
            color: "#50c786",
          },
        },
        error: {
          style: {
            color: "#eb6e6e",
          },
        },
        loading: {
          style: {
            color: "#f2cf42",
          },
        },
      }}
      position="bottom-left"
    >
      {t => (
        <ToastBar
          toast={t}
          style={{
            ...t.style,
            animation: t.visible
              ? "custom-enter 1s ease"
              : "custom-exit 1s ease",
          }}
        />
      )}
    </Toaster>
  );
}
