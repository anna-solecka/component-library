import classnames from "classnames";

interface ButtonProps {
  label: string;
  style?: "cancel" | "secondary";
  isDisabled?: boolean;
  isSmall?: boolean;
  width?: "fixed" | "max";
  isLink?: boolean;
  onClick?: () => void | Promise<void>;
}
const Button = ({
  label,
  style,
  isDisabled,
  isSmall,
  width,
  isLink,
  onClick,
}: ButtonProps) => {
  return (
    <>
      <div>
        <button
          className={classnames(
            isLink ? "ds_link" : "ds_button",
            { "ds_button--cancel": style === "cancel" },
            { "ds_button--secondary": style === "secondary" },
            { "ds_button--small": isSmall },
            { "ds_button--fixed": width === "fixed" },
            { "ds_button--max": width === "max" }
          )}
          disabled={isDisabled}
          type="button"
          onClick={onClick}
        >
          {label}
        </button>
      </div>
    </>
  );
};

export default Button;
