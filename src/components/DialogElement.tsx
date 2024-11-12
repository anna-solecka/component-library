import { useState } from "react";
import "./dialog.scss";
interface DialogElementProps {
  title: string;
  children: React.ReactNode;
  buttonOpenLabel: string;
  buttonCloseLabel: string;
  visible?: boolean;
}

const DialogElement: React.FC<DialogElementProps> = ({
  title,
  children,
  buttonCloseLabel,
  buttonOpenLabel,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="submit"
        className="ds_button"
        onClick={() => {
          setOpen(true);
        }}
      >
        {buttonOpenLabel}
      </button>
      {open && (
        <div className="dialog-element-contaier">
          <div className="dialog-box">
            <h1>{title}</h1>
            {children}
            <button
              className="ds_button"
              onClick={() => {
                setOpen(false);
              }}
            >
              {buttonCloseLabel}
            </button>
          </div>
        </div>
      )}
    </>
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
