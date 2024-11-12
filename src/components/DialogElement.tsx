import { useState } from "react";
import "./dialog.scss";
interface DialogElementProps {
  title: string;
  children: React.ReactNode;
  buttonCloseLabel: string;
  onClose: () => void;
}

const DialogElement: React.FC<DialogElementProps> = ({
  title,
  children,
  buttonCloseLabel,
  onClose,
}) => {
  return (
    <div className="dialog-element-contaier">
      <div className="dialog-box">
        <h1>{title}</h1>
        {children}
        <button
          className="ds_button"
          onClick={() => {
            onClose();
          }}
        >
          {buttonCloseLabel}
        </button>
      </div>
    </div>
  );
};

export default DialogElement;
// <dialog open className="backdrop">
//   <p>{title}</p>
//   <form method="dialog">
//     {children}
//     <button>{buttonLabel}</button>
//   </form>
// </dialog>
