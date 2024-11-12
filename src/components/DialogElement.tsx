import "./dialog.scss";
import { createContext, useState, useContext, ReactNode } from "react";

interface DialogContextProps {
  showDialog: () => void;
  hideDialog: () => void;
  isVisible: boolean;
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};

export const DialogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const showDialog = () => {
    setIsVisible(true);
  };

  const hideDialog = () => {
    setIsVisible(false);
  };

  return (
    <DialogContext.Provider value={{ showDialog, isVisible, hideDialog }}>
      {children}
    </DialogContext.Provider>
  );
};

interface DialogElementProps {
  title: string;
  children: React.ReactNode;
  buttonCloseLabel: string;
}

const DialogElement: React.FC<DialogElementProps> = ({
  title,
  children,
  buttonCloseLabel,
}) => {
  const { isVisible, hideDialog } = useDialog();

  if (!isVisible) {
    return null;
  }

  return (
    <div className="dialog-element-contaier">
      <div className="dialog-box">
        <h1>{title}</h1>
        {children}
        <button
          className="ds_button"
          onClick={() => {
            hideDialog();
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
