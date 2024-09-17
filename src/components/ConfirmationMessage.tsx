import { ReactNode } from "react";

interface ConfirmationMessageProps {
  title: string;
  body: ReactNode;
}

const ConfirmationMessage = ({ title, body }: ConfirmationMessageProps) => {
  return (
    <div className="ds_confirmation-message" aria-live="polite">
      <svg
        className="ds_confirmation-message__icon  ds_icon  ds_icon--24"
        aria-hidden="true"
        role="img"
      >
        <use href="/assets/images/icons/icons.stack.svg#check_circle"></use>
      </svg>
      <h3 className="ds_confirmation-message__title">{title}</h3>
      <div className="ds_confirmation-message__body">
        <p>{body}</p>
      </div>
    </div>
  );
};

export default ConfirmationMessage;
