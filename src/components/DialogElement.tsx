import "./dialog.scss";
interface DialogElementProps {
  title: string;
  children: React.ReactNode;
  buttonLabel: string;
}

const DialogElement: React.FC<DialogElementProps> = ({
  title,
  children,
  buttonLabel,
}) => {
  return (
    <div className="dialog-element-contaier">
      <div className="dialog-box">
        <h1>{title}</h1>
        {children}
        <button
          onClick={() => {
            console.log("Button clicked");
          }}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
    // <dialog open className="backdrop">
    //   <p>{title}</p>
    //   <form method="dialog">
    //     {children}
    //     <button>{buttonLabel}</button>
    //   </form>
    // </dialog>
  );
};

export default DialogElement;
