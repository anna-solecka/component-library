import { FC, ReactNode } from "react";
interface InsetTextProps {
  content: ReactNode;
}
const InsetText: FC<InsetTextProps> = ({ content }) => {
  return (
    <div className="ds_inset-text">
      <div className="ds_inset-text__text">{content}</div>
    </div>
  );
};

export default InsetText;
